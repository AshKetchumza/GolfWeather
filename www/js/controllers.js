angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout, $state, $rootScope, AppService, DeviceService) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.settings = AppService.GetUserSettings();

  //$scope.isOnForecastPage = false;
  $rootScope.isOnForecastPage = ($state.current.name == 'app.forecast');

  // $scope.units = {
  //   temp: data.temp,
  //   clock: data.clock
  // };

  $scope.homeViewOptions = [
    {value: 'MC', text: 'My Courses'},
    {value: 'LVC', text: 'Last Visited Course'},
    {value: 'FC', text: 'Favourite Course'}
  ];

  $scope.UserSettingsUpdate = function() {
    console.log($scope.settings);
    //var newSettings = { temp: $scope.units.temp, clock: $scope.units.clock, homeView: $scope.homeView };
    AppService.ApplyUserSettings($scope.settings);
  };

  $rootScope.$on('$stateChangeSuccess', function() {
    if ($state.current.name != 'app.compass') {
      DeviceService.clearHeadingWatch();
    }
    if ($state.current.name != 'app.slope-reader') {
      DeviceService.clearAccelerationWatch();
    }
    // $scope.isOnForecastPage = ($state.current.name == 'app.forecast');
    $rootScope.isOnForecastPage = ($state.current.name == 'app.forecast');
    console.log('$rootScope.isOnForecastPage: ', $rootScope.isOnForecastPage);
  });

  $rootScope.gotoMap = function() {
    $state.go('app.map');
  }

})

.controller('MyCoursesCtrl', function($scope, $state, $ionicLoading, $rootScope, CourseService, AppService) {

    $scope.selectedCourse = CourseService.viewCourse;

    $scope.settings = AppService.GetUserSettings();

    $scope.weatherLoaded = false;

    console.log($scope.settings);

    // $scope.$on('$ionicView.enter', function() {
    //   $rootScope.isOnForecastPage = true;
    // });
    //
    // // Hide Bookmark and Show FAQ icon
    // $scope.$on('$ionicView.leave', function() {
    //   $rootScope.isOnForecastPage = false;
    // });

    $scope.slickSettings = {
      method:{},
      dots:true,
      infinate:false,
      slidesToShow:1
    };

    if ($state.current.name === 'app.forecast') {
  		$scope.selectedCourse.current = JSON.parse(CourseService.viewCourse.current_json);
  		$scope.selectedCourse = CourseService.GetMostRecent(CourseService.viewCourse);

  		$scope.settings = AppService.GetUserSettings();

  		$ionicLoading.show();
  		$scope.weatherLoaded = false;

  		if (($scope.selectedCourse.detailedWeather == undefined) && ($scope.selectedCourse.summaryWeather == undefined)) {
  			CourseService.GetDetailedConditions($scope.selectedCourse.id).success(function(data) {
  				console.log('Detailed Weather: ', data.data)
  				$scope.selectedCourse.detailedWeather = [];
  				//console.log('Detailed Weather: ', $scope.selectedCourse.detailedWeather)
  				data.data.forEach(function(detail) {
  				  var added = false;
  				  for (var i = 0; i < $scope.selectedCourse.detailedWeather.length; i++)
  				  {
  					var day = $scope.selectedCourse.detailedWeather[i];
  					if (day.date == detail.local_time) {
  					  day.timeslots.push(detail);
  					  added = true;
  					  break;
  					}
  				  }
  				  if (!added) {
  					var day = { date: detail.local_time, weekday: detail.weekday, timeslots: [] };
  					day.timeslots.push(detail);
  					$scope.selectedCourse.detailedWeather.push(day);
  				  }
  				});

  				//get weather summary for the week...
  				CourseService.GetWeatherSummary($scope.selectedCourse.id).success(function(data) {
  				  console.log('Summary Weather: ', data.data)
  				  $scope.selectedCourse.summaryWeather = [];

  				  data.data.forEach(function(day) {
  					$scope.selectedCourse.summaryWeather.push(day);
  				  });

  				  $ionicLoading.hide();
  				  $scope.weatherLoaded = true;
  				  CourseService.AddToHistory($scope.selectedCourse);
  				}).error(function(data) {
  				  console.log('Error: ',data)
  				  $ionicLoading.hide();
  				  //display error message
  				  $scope.showAlert({title: data.title, message: data.message});
  				});
  			}).error(function(data) {
  				console.log('Error: ',data)
  				$ionicLoading.hide();
  				//display error message
  				$scope.showAlert({title: data.title, message: data.message});
  			});
  		}
      else {
        $ionicLoading.hide();
        $scope.weatherLoaded = true;
      }
    }

    console.log($scope.selectedCourse);
    $scope.myCourses = AppService.GetUserFavourites();

    $scope.selectCourse = function(myCourse, index) {
      CourseService.ApplyViewCourse(myCourse);
      $state.go('app.forecast');
    };

    $scope.coursesNearMe = [];

})

.controller('NewsController', function($scope, $state, NewsService) {

  $scope.selectedArticle = NewsService.viewArticle;
  $scope.articles = [
    {
      'title' : 'Fowler through the years',
      'details' : 'Images from throughout the career of PGA Tour fan favorite Rickie Fowler.'
    },
    {
      'title' : 'Fowler celebrates b-day drinking from Ryder Cup ',
      'details' : 'Rickie Fowler\'s 28th birthday is on Tuesday, and he started his celebration surrounded by good company ... cupcakes, Matt Kuchar and the Ryder Cup.'
    },
    {
      'title' : 'Newsmaker of the Year: No. 5, DJ ',
      'details' : 'A major title, three PGA Tour wins and a bevy of annual awards. It was a career year for Dustin Johnson, one many have been expecting.'
    },
    {
      'title' : 'Social Snapshots: December 2016',
      'details' : 'The best social snapshots from around the golf world from the month of December.'
    },
    {
      'title' : 'Woods officially commits to \'17 Genesis Open',
      'details' : 'Tiger Woods officially committed to the 2017 Genesis Open, held at Riviera where Woods made his first PGA Tour start at age'
    },
    {
      'title' : 'First Senior LPGA Championship coming in \'17 ',
      'details' : 'The Senior LPGA Championship for women 45 and over will be staged for the first time next year, the LPGA announced Tuesday.'
    }
  ];

  $scope.selectArticle = function(article, index) {
    NewsService.ApplyViewArticle(article);
    $state.go('app.news-article');
  }

})

.controller('TipsController', function($scope, $state, TipsService) {
  $scope.selectedTip = TipsService.viewTip;
  $scope.tips = [
    {
      title: 'Sample Tip',
      videoUrl: '',
      description: 'This is a sample tip'
    }
    ];
  $scope.selectTip = function(tip, index) {
    TipsService.ApplyViewTip(tip);
    $state.go('app.tip');
  }
})

//use the following plugin: cordova-plugin-device-orientation
//cordova plugin add cordova-plugin-device-orientation
.controller('CompassController', function($scope, $ionicPlatform, DeviceService) {//$cordovaDeviceOrientation) {
  //get the initial heading usign navigator.compass.getCurrentHeading(success, error);
  //sample usage documented on https://cordova.apache.org/docs/en/latest/reference/cordova-plugin-device-orientation/index.html

  //watch the heading and update the ui at the required interval
  var vm = this;
  vm.$onDestroy = $onDestroy;
  $scope.compassSupported = true;
  console.log(vm);

  $scope.orientation = false;

  $scope.magneticHeading = 0;
  $scope.trueHeading = 0;
  $scope.accuracy = 0;
  $scope.timeStamp = 0;

  DeviceService.getCurrentHeading().success(function(result) {
    $scope.orientation = true;

    $scope.magneticHeading = result.magneticHeading;
    $scope.trueHeading = result.trueHeading;
    $scope.accuracy = result.headingAccuracy;
    $scope.timeStamp = result.timestamp;
    console.log('Compass Success: ', result);
    cardinalDirection();
    DeviceService.watchHeading($scope.watchSuccess, $scope.watchError)
  }).error(function(data){
    alert('The Slope Reader/Accelerometer is not supported by your device');
    //$state.go('app.search-courses');
    //$state.go($state.previous.name);
  });

  $scope.watchSuccess = function(result) {
    $scope.magneticHeading = result.magneticHeading;
    $scope.trueHeading = result.trueHeading;
    $scope.accuracy = result.headingAccuracy;
    $scope.timeStamp = result.timestamp;
    console.log('Compass Success: ', result);
    cardinalDirection();
  };

  $scope.watchError = function(error) {
    console.log('Slope Reader Error: ', error);
    alert(error);
  };

  console.log('Compass Supported: ', $scope.compassSupported);

  function cardinalDirection() {
    var SECTOR = 360 / 8; // = 45
    var HALF_SECTOR = SECTOR / 2; // = 22.5

    // 337.5 - 360 && 0 - 22.5
    var isN = ($scope.magneticHeading >= 360 - HALF_SECTOR && $scope.magneticHeading <= 360) ||
        ($scope.magneticHeading >= 0 && $scope.magneticHeading < HALF_SECTOR);
    // 22.5 - 67.5
    var isNE = $scope.magneticHeading >= HALF_SECTOR && $scope.magneticHeading < HALF_SECTOR + SECTOR;
    // 67.5 - 112.5
    var isE = $scope.magneticHeading >= HALF_SECTOR + SECTOR && $scope.magneticHeading < HALF_SECTOR + SECTOR * 2;
    // 112.5 - 157.5
    var isSE = $scope.magneticHeading >= HALF_SECTOR + SECTOR * 2 && $scope.magneticHeading < HALF_SECTOR + SECTOR * 3;
    // 157.5 - 202.5
    var isS = $scope.magneticHeading >= HALF_SECTOR + SECTOR * 3 && $scope.magneticHeading < HALF_SECTOR + SECTOR * 4;
    // 202.5 - 247.5
    var isSW = $scope.magneticHeading >= HALF_SECTOR + SECTOR * 4 && $scope.magneticHeading < HALF_SECTOR + SECTOR * 5;
    // 247.5 - 292.5
    var isW = $scope.magneticHeading >= HALF_SECTOR + SECTOR * 5 && $scope.magneticHeading < HALF_SECTOR + SECTOR * 6;
    // 292.5 - 337.5
    var isNW = $scope.magneticHeading >= HALF_SECTOR + SECTOR * 6 && $scope.magneticHeading < HALF_SECTOR + SECTOR * 7;

    if(isN) {
      $scope.cardinalDirection = 'N';
    } else if(isNE) {
      $scope.cardinalDirection = 'NE';
    } else if(isE) {
      $scope.cardinalDirection = 'E';
    } else if(isSE) {
      $scope.cardinalDirection = 'SE';
    } else if(isS) {
      $scope.cardinalDirection = 'S';
    } else if(isSW) {
      $scope.cardinalDirection = 'SW';
    } else if(isW) {
      $scope.cardinalDirection = 'W';
    } else if(isNW) {
      $scope.cardinalDirection = 'NW';
    }
  }

  function $onDestroy() {
    //watch.clearWatch();
  }
})

.controller('SlopeReaderController', function($scope, DeviceService) {
  //use the following plugin for the information required for this controller
  //https://cordova.apache.org/docs/en/latest/reference/cordova-plugin-device-motion/index.html
  //http://ngcordova.com/docs/plugins/deviceMotion/
  $scope.device = {X: 0, Y:0, Z:0};
  DeviceService.getCurrentAcceleration().success(function(data) {
    $scope.device.X = data.x;
    $scope.device.Y = data.y;
    $scope.device.Z = data.z;
    DeviceService.watchAcceleration($scope.watchSuccess, $scope.watchError)
  }).error(function(data){
    alert('The Slope Reader/Accelerometer is not supported by your device');
    //$state.go('app.search-courses');
    //$state.go($state.previous.name);
  });

  $scope.watchSuccess = function(data) {
    $scope.device.X = data.x;
    $scope.device.Y = data.y;
    $scope.device.Z = data.z;
  };

  $scope.watchError = function(error) {
    console.log('Slope Reader Error: ', error);
    alert(error);
  };
})

.controller('RadarController', function($scope) {
  //controll map overlays for the radar page
})

.controller('SearchController', function($scope, $state, $stateParams, $ionicLoading, $ionicPopup, CourseService, AppService) {
   //control search
   $scope.search = { country: '', keyword: ''};
   $scope.countries = CourseService.countries;
   $scope.continents = CourseService.continents;
   $scope.searchResults = [];

   $scope.continentCountries = [];
   if (CourseService.selectContinent) {
     $scope.continentCountries = CourseService.selectContinent.countries;
   }
   $scope.countryRegions = [];
   if (CourseService.selectedCountry.hasOwnProperty('id')) {
     $scope.countryRegions = CourseService.selectedCountry.regions;
   }
   $scope.regionSubregions = [];
   if (CourseService.selectedRegion.hasOwnProperty('id')) {
     $scope.regionSubregions = CourseService.selectedRegion.subregions;
   }
   $scope.regionCourses = [];
   if (CourseService.selectedSubregion.hasOwnProperty('id')) {
     $scope.regionCourses = CourseService.selectedSubregion.courses;
    //  if ($scope.regionCourses.length > 0 && $scope.regionCourses[0].current == undefined)
    //  {
    //    convertCurrentWeather($scope.regionCourses);
    //  }
   }
   $scope.nearbyCourses = [];
   console.log('Courses: ', $scope.regionCourses);

   function convertCurrentWeather(courses) {
     console.log('convertCurrentWeather: ', courses);
     courses.forEach(function(course) {
       course.current = JSON.parse(course.current_json);
     });
   }

   $scope.settings = AppService.GetUserSettings();

   $scope.showAlert = function(data) {
     var alertPopup = $ionicPopup.alert({
       title: data.title,
       template: data.message
     });

     alertPopup.then(function(res) {
       //
     });
   };

   $scope.selectContinent = function(continent, index) {
     CourseService.selectContinent = continent;
     console.log('Selected Continent: ', CourseService.selectContinent);
     CourseService.selectContinent.countries = CourseService.CountriesForContinent(continent.id);
     $state.go('app.search-continent-regions');
   }

   $scope.selectCountry = function(country, index) {
     CourseService.selectedCountry = country;
     console.log('Selected Country: ', CourseService.selectedCountry);
     $ionicLoading.show();
     CourseService.RegionsForCountry(country.id).success(function(data) {
       console.log('Regions: ', data)
       if (data.length == 0) {
         $scope.selectRegion(country, -1);
       }else {
         CourseService.selectedCountry.regions = data;
         $ionicLoading.hide();
         $state.go('app.search-country-regions');
       }
     }).error(function(data) {
       console.log('Error: ',data)
       $ionicLoading.hide();
       //display error message
       $scope.showAlert({title: data.title, message: data.message});
     });
   }

   $scope.selectRegion = function(region, index) {
     CourseService.selectedRegion = region;
     console.log('Selected Region: ', region);
     $ionicLoading.show();
     CourseService.SubRegionsForRegion(region.id).success(function(data) {
       console.log('Subregions: ', data)
       $ionicLoading.hide();
       if (data.length == 0) {
         $scope.selectSubregion(region, -1);
       }else {
         CourseService.selectedRegion.subregions = data;
         $state.go('app.search-region-subregions');
       }
     }).error(function(data) {
       console.log('Error: ',data)
       $ionicLoading.hide();
       //display error message
       $scope.showAlert({title: data.title, message: data.message});
     });
   }

   $scope.selectSubregion = function(subregion, index) {
     CourseService.selectedSubregion = subregion;
     console.log('Selected SubRegion: ', CourseService.selectedSubregion);
     $ionicLoading.show();
     CourseService.CoursesForRegion(subregion.id).success(function(data) {
       CourseService.selectedSubregion.courses = data;
       convertCurrentWeather(CourseService.selectedSubregion.courses);
       $ionicLoading.hide();
       $state.go('app.search-region-courses');
     }).error(function(data) {
       console.log('Error: ',data)
       $ionicLoading.hide();
       //display error message
       $scope.showAlert({title: data.title, message: data.message});
     });
   }

   if ($stateParams) {
     if ($state.current.name === 'app.search-results') {
       $ionicLoading.show();
       CourseService.Search($stateParams.countryID, $stateParams.keyword).success(function(data) {
         $scope.searchResults = data;
         convertCurrentWeather($scope.searchResults);
         $ionicLoading.hide();
         console.log(data);
       }).error(function(data) {
         console.log('Error: ',data)
         $ionicLoading.hide();
         //display error message
         $scope.showAlert({title: data.title, message: data.message});
       });
     }else if ($state.current.name === 'app.courses-nearby') {
       $ionicLoading.show();
       CourseService.Nearby().success(function (data) {
         $scope.nearbyCourses = data;
         convertCurrentWeather($scope.nearbyCourses);
         $ionicLoading.hide();
       }).error(function(data) {
         console.log('Error: ',data)
         $ionicLoading.hide();
         //display error message
         $scope.showAlert({title: data.title, message: data.message});
       });
     }
   }

    $scope.selectCourse = function(course, index) {
        CourseService.ApplyViewCourse(course);
        $state.go('app.forecast');
    };
  //    else if ($state.current.name === 'app.search-continent-regions') {
  //      console.log($stateParams.continentID);
  //      $scope.continentCountries = CourseService.CountriesForContinent($stateParams.continentID);
  //    }
  //    else if ($state.current.name === 'app.search-country-regions') {
  //      console.log($stateParams.countryID);
  //      $scope.countryName = $stateParams.countryName;
  //      $scope.countryID = $stateParams.countryID
  //      CourseService.RegionsForCountry($stateParams.countryID).success(function(data) {
  //        $scope.countryRegions = data;
  //      })
  //    }
  //    else if ($state.current.name === 'app.search-region-subregions') {
  //      console.log($stateParams.regionID);
  //      $scope.regionID = $stateParams.regionID;
  //      CourseService.SubRegionsForRegion($stateParams.regionID).success(function(data) {
  //        $scope.regionSubregions = data;
  //        if (data.length == 0) {
  //          $state.go('app.search-region-courses',{countryID: $scope.countryID, subregionID: $scope.regionID});
  //        }
  //      })
  //    }
  //    else if ($state.current.name === 'app.search-region-courses') {
  //      console.log($stateParams.subregionID);
  //      $scope.subregionID = $stateParams.subregionID;
  //      CourseService.CoursesForRegion($scope.countryID, $stateParams.subregionID).success(function(data) {
  //        $scope.regionCourses = data;
  //      })
  //    }
  //  }
})

.controller('PrizeDrawController', function($scope) {
  $scope.draw = {
    title: 'Enter and Win!',
    description: '1 Lucky GolfWeather user will win 6 DOZEN Srixon Golf' +
      'Balls, including a ball fitting!' +
      'Visit Srixon.com for more info on their range of balls,' +
      'there are many choices to fit your game.' +
      'The lucky draw will take place on the 1st of September' +
      '2016 and the winner will be notified via email.' +
      'To increase your chance of winning you will receive an' +
      'additional entry if you "like" the GolfWeather facebook' +
      'page. http://www.facebook.com/GolfWeather'
  };

  $scope.entry = {
    title: '',
    name: '',
    surname: '',
    email: '',
    country: ''
  };

  $scope.enter = function(form) {
    //submit entry data
  };
})

.controller('MapController', function($scope, $ionicLoading, $ionicPopup, CourseService, GeoService, GooglePlacesService) {
  $scope.selectedCourse = CourseService.viewCourse;
  $scope.latitude = $scope.selectedCourse.lat;
  $scope.longitude = $scope.selectedCourse.long;
  $scope.courseLatLng = new google.maps.LatLng($scope.latitude, $scope.longitude);
  $scope.selectedCourse.current = JSON.parse($scope.selectedCourse.current_json);
  $scope.currentLocation = {};
  $scope.currentRouteRequest = {};
  var directionsDisplay;
  var directionsService = new google.maps.DirectionsService();

  $scope.course = CourseService.viewCourse;

  $scope.customMarkers = [];

  $scope.search = { input: '' };
  $scope.predictions = [];

  $scope.markers_collection = [];
  $scope.markers_cluster = null;

  // To properly init the google map with angular js
  $scope.init = function(map) {
    $scope.mymap = map;
    directionsDisplay = new google.maps.DirectionsRenderer();
    directionsDisplay.setMap($scope.mymap);
    $scope.$apply();
    cleanMap();
    createMarker($scope.courseLatLng);
  };

  var cleanMap = function() {
    // Remove the markers from the map and from the array
    while($scope.markers_collection.length){
      $scope.markers_collection.pop().setMap(null);
    }

    // Remove clusters from the map
    if($scope.markers_cluster !== null){
      $scope.markers_cluster.clearMarkers();
    }
  },
  createMarker = function(place){
      var  marker_options = {
          map: $scope.mymap,
          animation: google.maps.Animation.DROP
        };

    // Handle both types of markers, places markers and location (lat, lng) markers
    if(place.geometry){
      marker_options.position = place.geometry.location;
    }
    else {
      marker_options.position = place;
    }

    var marker = new google.maps.Marker(marker_options);

    // For the places markers we are going to add a click event to display place details
    marker.addListener('click', function() {
      $scope.mymap.showInfoWindow('info', this);
    });

    $scope.markers_collection.push(marker);

    return marker;
  },
  createCluster = function(markers){
    $scope.markers_cluster = new MarkerClusterer($scope.mymap, markers, {
      styles: [
        {
          url: '../img/i1.png',
          height: 53,
          width: 52,
          textColor: '#FFF',
          textSize: 12
        },
        {
          url: '../img/i2.png',
          height: 56,
          width: 55,
          textColor: '#FFF',
          textSize: 12
        },
        {
          url: '../img/i3.png',
          height: 66,
          width: 65,
          textColor: '#FFF',
          textSize: 12
        },
        {
          url: '../img/i4.png',
          height: 78,
          width: 77,
          textColor: '#FFF',
          textSize: 12
        },
        {
          url: '../img/i5.png',
          height: 90,
          width: 89,
          textColor: '#FFF',
          textSize: 12
        }
      ],
      imagePath: '../img/i'
    });
  }
  displayRoute = function(location) {
    cleanMap();
    var start = location;
    var end = $scope.courseLatLng;
    var request = {
      origin: start,
      destination: end,
      travelMode: 'DRIVING'
    };
    $scope.currentRouteRequest = request;
    directionsService.route(request, function(result, status) {
      console.log('RoutesStatus: ', status);
      console.log('RoutesResult: ', result);
      $ionicLoading.hide();
      if (status == 'OK') {
        directionsDisplay.setDirections(result);
      }else  if (status == 'ZERO_RESULTS') {
        $ionicPopup.alert({
         title: 'No Routes Found',
         template: 'No drivable routes have been found'
       });
      }
    });
  }
  ;

  $scope.getPlacePredictions = function(query){
    if(query !== "")
    {
      GooglePlacesService.getPlacePredictions(query, $scope.selectedCourse.current.country_id)
      .then(function(predictions){
        $scope.predictions = predictions;
      });
    }else{
      $scope.predictions = [];
    }
  };

  $scope.selectSearchResult = function(result){
    console.log('SearchResult: ', result);
    $scope.search.input = result.description;
    $scope.predictions = [];

    $ionicLoading.show({
      template: 'Calculating routes...'
    });

    // With this result we should find restaurants arround this place and then show them in the map
    // First we need to get LatLng from the place ID
    GooglePlacesService.getLatLng(result.place_id)
    .then(function(result_location){
      displayRoute(result_location);
    });
  };

        // var bound = new google.maps.LatLngBounds();
        //  $scope.mymap.fitBounds(bound);
        //  var neraby_places_bound_center = bound.getCenter();
        //  // Center map based on the bound arround nearby places
        // $scope.latitude = neraby_places_bound_center.lat();
        // $scope.longitude = neraby_places_bound_center.lng();

      // Now we are able to search restaurants near this location
      // GooglePlacesService.getPlacesNearby(result_location)
      // .then(function(nearby_places){
      //   // Clean map
      //   cleanMap();
      //
      //   $ionicLoading.hide().then(function(){
      //     // Create a location bound to center the map based on the results
      //     var bound = new google.maps.LatLngBounds(),
      //         places_markers = [];
      //
      //     for (var i = 0; i < nearby_places.length; i++) {
  		//       bound.extend(nearby_places[i].geometry.location);
  		//       var place_marker = createMarker(nearby_places[i]);
      //       places_markers.push(place_marker);
  		//     }
      //
      //     // Create cluster with places
      //     createCluster(places_markers);
      //
      //     var neraby_places_bound_center = bound.getCenter();
      //
      //     // Center map based on the bound arround nearby places
      //     $scope.latitude = neraby_places_bound_center.lat();
      //     $scope.longitude = neraby_places_bound_center.lng();
      //
      //     // To fit map with places
      //     $scope.mymap.fitBounds(bound);
      //   });
      // });

  GeoService.getPosition().then(function(latLng) {
    console.log('latLng: ', latLng);
    $scope.currentLocation = latLng;
    //createMarker({lat: latLng.latitude, lng: latLng.longitude});
  });

  $scope.useCurrentlocation = function() {
    $ionicLoading.show({
      template: 'Calculating routes...'
    });
    displayRoute($scope.currentLocation);
  }

})
