angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout, $state, AppService) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.settings = AppService.GetUserSettings();

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

})

.controller('MyCoursesCtrl', function($scope, $state, $ionicLoading, CourseService, AppService) {

    $scope.selectedCourse = CourseService.viewCourse;

    $scope.settings = AppService.GetUserSettings();

    $scope.weatherLoaded = true;

    console.log($scope.settings);

    $scope.slickSettings = {
      method:{},
      dots:true,
      infinate:false,
      slidesToShow:1
    };

    if ($state.current.name === 'app.forecast') {
      $scope.settings = AppService.GetUserSettings();
      $scope.selectedCourse.current = JSON.parse(CourseService.viewCourse.current_json);
      $ionicLoading.show();
      $scope.weatherLoaded = false;
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

        //$scope.selectedCourse.detailedWeather = data.data;
        $ionicLoading.hide();
        $scope.weatherLoaded = true;
      }).error(function(data) {
        console.log('Error: ',data)
        $ionicLoading.hide();
        //display error message
        $scope.showAlert({title: data.title, message: data.message});
      });
    }

    console.log($scope.selectedCourse);
    //$scope.selectedCourseName = CourseService.viewCourse.name;
    //console.log($state.current.name);

     if ($state.current.name === 'app.map') {
       initialize();
    //   var mapOptions = {
    //     zoom: 16,
    //     mapTypeId: google.maps.MapTypeId.ROADMAP
    //   };
    //   var map = new google.maps.Map(document.getElementById("map"),
    //         mapOptions);
     }

    $scope.myCourses = [
        {
            name: "Milnerton",
            temp: "11",
            currentCond: "Mostly Cloudy. Cool",
            sunrise: "5:53am",
            sunset: "6.27pm",
            temp1: "11",
            rain1: "90",
            mm1: "3.43",
            wind1: "37",
            dir1: "NNW",
            temp2: "18",
            rain2: "0",
            mm2: "0",
            wind2: "12",
            dir2: "NNW",
            temp3: "14",
            rain3: "90",
            mm3: "0.3",
            wind3: "37",
            dir3: "NNW",
            temp4: "17",
            rain4: "0",
            mm4: "0",
            wind4: "12",
            dir4: "NNW",
            temp5: "20",
            rain5: "0",
            mm5: "0",
            wind5: "12",
            dir5: "NNW"
        },
         {
            name: "Atlantic Beach",
            temp: "16",
            currentCond: "Mostly Cloudy. Cool",
            sunrise: "5:53am",
            sunset: "6.27pm",
            temp1: "11",
            rain1: "90",
            mm1: "3.43",
            wind1: "37",
            dir1: "NNW",
            temp2: "18",
            rain2: "0",
            mm2: "0",
            wind2: "12",
            dir2: "NNW",
            temp3: "14",
            rain3: "90",
            mm3: "0.3",
            wind3: "37",
            dir3: "NNW",
            temp4: "17",
            rain4: "0",
            mm4: "0",
            wind4: "12",
            dir4: "NNW",
            temp5: "20",
            rain5: "0",
            mm5: "0",
            wind5: "12",
            dir5: "NNW"
        },
         {
            name: "Clovelly",
            temp: "17",
            currentCond: "Mostly Cloudy. Cool",
            sunrise: "5:53am",
            sunset: "6.27pm",
            temp1: "11",
            rain1: "90",
            mm1: "3.43",
            wind1: "37",
            dir1: "NNW",
            temp2: "18",
            rain2: "0",
            mm2: "0",
            wind2: "12",
            dir2: "NNW",
            temp3: "14",
            rain3: "90",
            mm3: "0.3",
            wind3: "37",
            dir3: "NNW",
            temp4: "17",
            rain4: "0",
            mm4: "0",
            wind4: "12",
            dir4: "NNW",
            temp5: "20",
            rain5: "0",
            mm5: "0",
            wind5: "12",
            dir5: "NNW"
        },
         {
            name: "Metropiton",
            temp: "21",
            currentCond: "Mostly Cloudy. Cool",
            sunrise: "5:53am",
            sunset: "6.27pm",
            temp1: "11",
            rain1: "90",
            mm1: "3.43",
            wind1: "37",
            dir1: "NNW",
            temp2: "18",
            rain2: "0",
            mm2: "0",
            wind2: "12",
            dir2: "NNW",
            temp3: "14",
            rain3: "90",
            mm3: "0.3",
            wind3: "37",
            dir3: "NNW",
            temp4: "17",
            rain4: "0",
            mm4: "0",
            wind4: "12",
            dir4: "NNW",
            temp5: "20",
            rain5: "0",
            mm5: "0",
            wind5: "12",
            dir5: "NNW"
        },
         {
            name: "Pearl Valley",
            temp: "13",
            currentCond: "Mostly Cloudy. Cool",
            sunrise: "5:53am",
            sunset: "6.27pm",
            temp1: "11",
            rain1: "90",
            mm1: "3.43",
            wind1: "37",
            dir1: "NNW",
            temp2: "18",
            rain2: "0",
            mm2: "0",
            wind2: "12",
            dir2: "NNW",
            temp3: "14",
            rain3: "90",
            mm3: "0.3",
            wind3: "37",
            dir3: "NNW",
            temp4: "17",
            rain4: "0",
            mm4: "0",
            wind4: "12",
            dir4: "NNW",
            temp5: "20",
            rain5: "0",
            mm5: "0",
            wind5: "12",
            dir5: "NNW"
        },
         {
            name: "River Club",
            temp: "14",
            currentCond: "Mostly Cloudy. Cool",
            sunrise: "5:53am",
            sunset: "6.27pm",
            temp1: "11",
            rain1: "90",
            mm1: "3.43",
            wind1: "37",
            dir1: "NNW",
            temp2: "18",
            rain2: "0",
            mm2: "0",
            wind2: "12",
            dir2: "NNW",
            temp3: "14",
            rain3: "90",
            mm3: "0.3",
            wind3: "37",
            dir3: "NNW",
            temp4: "17",
            rain4: "0",
            mm4: "0",
            wind4: "12",
            dir4: "NNW",
            temp5: "20",
            rain5: "0",
            mm5: "0",
            wind5: "12",
            dir5: "NNW"
        },
         {
            name: "Steenberg",
            temp: "22",
            currentCond: "Mostly Cloudy. Cool",
            sunrise: "5:53am",
            sunset: "6.27pm",
            temp1: "11",
            rain1: "90",
            mm1: "3.43",
            wind1: "37",
            dir1: "NNW",
            temp2: "18",
            rain2: "0",
            mm2: "0",
            wind2: "12",
            dir2: "NNW",
            temp3: "14",
            rain3: "90",
            mm3: "0.3",
            wind3: "37",
            dir3: "NNW",
            temp4: "17",
            rain4: "0",
            mm4: "0",
            wind4: "12",
            dir4: "NNW",
            temp5: "20",
            rain5: "0",
            mm5: "0",
            wind5: "12",
            dir5: "NNW"
        },
         {
            name: "Sun City",
            temp: "19",
            currentCond: "Mostly Cloudy. Cool",
            sunrise: "5:53am",
            sunset: "6.27pm",
            temp1: "11",
            rain1: "90",
            mm1: "3.43",
            wind1: "37",
            dir1: "NNW",
            temp2: "18",
            rain2: "0",
            mm2: "0",
            wind2: "12",
            dir2: "NNW",
            temp3: "14",
            rain3: "90",
            mm3: "0.3",
            wind3: "37",
            dir3: "NNW",
            temp4: "17",
            rain4: "0",
            mm4: "0",
            wind4: "12",
            dir4: "NNW",
            temp5: "20",
            rain5: "0",
            mm5: "0",
            wind5: "12",
            dir5: "NNW"
        },
         {
            name: "Augusta National",
            temp: "18",
            currentCond: "Mostly Cloudy. Cool",
            sunrise: "5:53am",
            sunset: "6.27pm",
            temp1: "11",
            rain1: "90",
            mm1: "3.43",
            wind1: "37",
            dir1: "NNW",
            temp2: "18",
            rain2: "0",
            mm2: "0",
            wind2: "12",
            dir2: "NNW",
            temp3: "14",
            rain3: "90",
            mm3: "0.3",
            wind3: "37",
            dir3: "NNW",
            temp4: "17",
            rain4: "0",
            mm4: "0",
            wind4: "12",
            dir4: "NNW",
            temp5: "20",
            rain5: "0",
            mm5: "0",
            wind5: "12",
            dir5: "NNW"
        },
        {
            name: "Happy Land",
            temp: "14",
            currentCond: "Mostly Cloudy. Cool",
            sunrise: "5:53am",
            sunset: "6.27pm",
            temp1: "11",
            rain1: "90",
            mm1: "3.43",
            wind1: "37",
            dir1: "NNW",
            temp2: "18",
            rain2: "0",
            mm2: "0",
            wind2: "12",
            dir2: "NNW",
            temp3: "14",
            rain3: "90",
            mm3: "0.3",
            wind3: "37",
            dir3: "NNW",
            temp4: "17",
            rain4: "0",
            mm4: "0",
            wind4: "12",
            dir4: "NNW",
            temp5: "20",
            rain5: "0",
            mm5: "0",
            wind5: "12",
            dir5: "NNW"
        }
    ];

    $scope.selectCourse = function(myCourse, index) {
        CourseService.ApplyViewCourse(myCourse);
        $state.go('app.forecast');
    };

    $scope.coursesNearMe = [];

    function initialize() {
      $ionicLoading.show();
      CourseService.Nearby().success(function (data) {
        // var myLatlng = new google.maps.LatLng(CourseService.currentPosition.latitude, CourseService.currentPosition.longitude);
        //
        // var mapOptions = {
        //   center: myLatlng,
        //   zoom: 12,
        //   disableDefaultUI: true,
        //   mapTypeId: google.maps.MapTypeId.ROADMAP
        // };
        // var map = new google.maps.Map(document.getElementById("map"),
        //     mapOptions);

        //Marker + infowindow + angularjs compiled ng-click
        //var contentString = "<div><a ng-click='clickTest()'>Click me!</a></div>";
        //var compiled = $compile(contentString)($scope);

        // var infowindow = new google.maps.InfoWindow({
        //   content: compiled[0]
        // });

        // var marker = new google.maps.Marker({
        //   position: myLatlng,
        //   map: map,
        //   title: 'Uluru (Ayers Rock)'
        // });

        $scope.coursesNearMe = [];
        for (var i = 0; i < data.length; i++) {
          $scope.coursesNearMe.push(data[i]);
          // new google.maps.Marker({
          //   position: new google.maps.LatLng(data[i].lat, data[i].long),
          //   map: map,
          //   title: data[i].name
          // });
        }
        $ionicLoading.hide();
        console.log('Courses near me: ', $scope.coursesNearMe);

        // google.maps.event.addListener(marker, 'click', function() {
        //   //infowindow.open(map,marker);
        // });

        // $scope.map = map;
      });
    }
      //google.maps.event.addDomListener(window, 'load', initialize);

      $scope.centerOnMe = function() {
        if(!$scope.map) {
          return;
        }

        // $scope.loading = $ionicLoading.show({
        //   content: 'Getting current location...',
        //   showBackdrop: false
        // });

        // navigator.geolocation.getCurrentPosition(function(pos) {
        //   $scope.map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
        //   $scope.loading.hide();
        // }, function(error) {
        //   alert('Unable to get location: ' + error.message);
        // });
      };

      $scope.clickTest = function() {
        alert('Example of infowindow with ng-click')
      };


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
.controller('CompassController', function($scope, $ionicPlatform, $cordovaDeviceOrientation) {
  //get the initial heading usign navigator.compass.getCurrentHeading(success, error);
  //sample usage documented on https://cordova.apache.org/docs/en/latest/reference/cordova-plugin-device-orientation/index.html

  //watch the heading and update the ui at the required interval
  var vm = this;
  vm.$onDestroy = $onDestroy;
  $scope.compassSupported = true;
  console.log(vm);

  // Device Orientation plugin

  $ionicPlatform.ready(function() {
    startOrientation();
  });

  function startOrientation() {

    $cordovaDeviceOrientation.getCurrentHeading().then(function(result) {
      console.log('Compass: ', result);
      $scope.orientation = true;

      $scope.magneticHeading = result.magneticHeading;
      $scope.trueHeading = result.trueHeading;
      $scope.accuracy = result.headingAccuracy;
      $scope.timeStamp = result.timestamp;

      cardinalDirection();
    }, function(err) {
      // An error occurred
      $scope.orientation = false;
      $scope.error = err;
      $scope.compassSupported = false;
      console.log('Compass Supported: ', $scope.compassSupported);
      console.log('CompassController.startOrientation.error: ', err);
    });

    var options = {
      frequency: 3000,
      filter: true     // if frequency is set, filter is ignored
    };

    var watch = $cordovaDeviceOrientation.watchHeading(options).then(
      null,
      function(err) {
        // An error occurred
        $scope.orientation = false;
        $scope.error = err;
        console.log('CompassController.watch.error: ', err);
        $scope.compassSupported = false;
        console.log('Compass Supported: ', $scope.compassSupported);
      },
      function(result) {   // updates constantly (depending on frequency value)

        $scope.orientation = true;

        $scope.magneticHeading = result.magneticHeading;
        $scope.trueHeading = result.trueHeading;
        $scope.accuracy = result.headingAccuracy;
        $scope.timeStamp = result.timestamp;
        cardinalDirection();
      });

  }

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
    watch.clearWatch();
  }
})

.controller('SlopeReaderController', function($scope) {
  //use the following plugin for the information required for this controller
  //https://cordova.apache.org/docs/en/latest/reference/cordova-plugin-device-motion/index.html
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
