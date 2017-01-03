angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout, $state) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  var data = AppService.GetUSerSettings();

  $scope.units = {
    temp: data.temp,
    clock: data.clock
  };
  $scope.homeView = data.homeView;
  
  $scope.UserSettingsUpdate = function() {
    var newSettings = { temp: $scope.units.temp, clock: $scope.units.clock, homeView: $scope.homeView };
    AppService.ApplyUserSettings(newSettings);
  };

})

.controller('MyCoursesCtrl', function($scope, $state, CourseService) {

    $scope.selectedCourse = CourseService.viewCourse;
    console.log($state.current.name);

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
.controller('CompassController', function($scope) {
  //get the initial heading usign navigator.compass.getCurrentHeading(success, error);
  //sample usage documented on https://cordova.apache.org/docs/en/latest/reference/cordova-plugin-device-orientation/index.html

  //watch the heading and update the ui at the required interval
})

.controller('SlopeReaderController', function($scope) {
  //use the following plugin for the information required for this controller
  //https://cordova.apache.org/docs/en/latest/reference/cordova-plugin-device-motion/index.html
})

.controller('RadarController', function($scope) {
  //controll map overlays for the radar page
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
