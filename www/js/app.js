// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.directives'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.my-courses', {
    url: '/my-courses',
    views: {
      'menuContent': {
        templateUrl: 'templates/my-courses.html',
          controller: "MyCoursesCtrl"
      }
    }
  })

  .state('app.forecast', {
    url: '/forecast',
    views: {
      'menuContent': {
        templateUrl: 'templates/forecast.html',
          controller: "MyCoursesCtrl"
      }
    }
  })

  .state('app.settings', {
    url: '/settings',
    views: {
      'menuContent': {
        templateUrl: 'templates/settings.html',
        controller: 'AppCtrl'
      }
    }
  })

  .state('app.signin', {
    url: '/signin',
    views: {
      'menuContent': {
        templateUrl: 'templates/signin.html'
      }
    }
  })

  .state('app.missing-courses', {
      url: '/missing-courses',
      views: {
        'menuContent': {
          templateUrl: 'templates/missing-courses.html'
        }
      }
    })

    .state('app.map', {
        url: '/map',
        views: {
          'menuContent': {
            templateUrl: 'templates/map.html',
            controller: 'MyCoursesCtrl'
          }
        }
      })

  .state('app.share', {
    url: '/share',
    views: {
      'menuContent': {
        templateUrl: 'templates/share.html'
      }
    }
  })

  .state('app.golf-stats', {
    url: '/golf-stats',
    views: {
      'menuContent': {
        templateUrl: 'templates/golf-stats.html'
      }
    }
  })
  .state('app.upgrade', {
    url: '/upgrade',
    views: {
      'menuContent': {
        templateUrl: 'templates/upgrade.html'
      }
    }
  })

  .state('app.rate', {
    url: '/rate',
    views: {
      'menuContent': {
        templateUrl: 'templates/rate.html'
      }
    }
  })

  .state('app.support', {
    url: '/support',
    views: {
      'menuContent': {
        templateUrl: 'templates/support.html'
      }
    }
  })

  .state('app.suggested-apps', {
    url: '/suggested-apps',
    views: {
      'menuContent': {
        templateUrl: 'templates/suggested-apps.html'
      }
    }
  })

  .state('app.news', {
    url: '/news',
    views : {
      'menuContent' : {
        templateUrl: 'templates/news.html',
        controller: 'NewsController'
      }
    }
  })

  .state('app.news-article', {
    url: '/news-article',
    views : {
      'menuContent' : {
        templateUrl: 'templates/article.html',
        controller: 'NewsController'
      }
    }
  })

  .state('app.tips', {
    url: '/tips',
    views : {
      'menuContent' : {
        templateUrl: 'templates/viewtips.html',
        controller: 'TipsController'
      }
    }
  })

  .state('app.tip', {
    url: '/tip',
    views : {
      'menuContent' : {
        templateUrl: 'templates/tip.html',
        controller: 'TipsController'
      }
    }
  })

  .state('app.compass', {
    url: '/compass',
    views : {
      'menuContent' : {
        templateUrl: 'templates/compass.html',
        controller: 'CompassController'
      }
    }
  })

  .state('app.radar', {
    url: '/radar',
    views : {
      'menuContent' : {
        templateUrl: 'templates/radar.html',
        controller: 'RadarController'
      }
    }
  })

  .state('app.slope-reader', {
    url: '/slope-reader',
    views : {
      'menuContent' : {
        templateUrl: 'templates/slope-reader.html',
        controller: 'SlopeReaderController'
      }
    }
  })

  .state('app.prizedraw', {
    url: '/prizedraw',
    views : {
      'menuContent' : {
        templateUrl: 'templates/prizedraw.html',
        controller: 'PrizeDrawController'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/my-courses');
})

.service('AppService', function() {
  var service = {};

  service.GetUrl = function(url, params) {
    var res = 'http://www.golfweather.com/app/' + url;
    for(var prop in params) {
      res = res.replace('{' + prop + '}', params[prop]);
    }
    return res;
  };

  return service;
})

//Course Service
.service('CourseService', function($q, $http, AppService){
    var service = {
        viewCourse : {},
        currentPosition : { coords : {
            latitude: 0,
            longitude: 0
          }
        }
    };
    service.ApplyViewCourse = function(data){
    service.viewCourse = data;
    localStorage.setItem('viewCourse', JSON.stringify(data));
    };
    service.LocalCheck = function() {
        if (localStorage.getItem("viewCourse"))
        {
          //storage exists
          this.ApplyViewCourse(JSON.parse(localStorage.getItem("viewCourse")));
        }
      };

    service.Nearby = function() {
      var deferred = $q.defer();
	    var promise = deferred.promise;
      var pos = {coordinates : {
        latitude: -33.8723569,
        longitude: 18.4886431
      }};
      //navigator.geolocation.getCurrentPosition(function(pos) {
        service.currentPosition.latitude =  pos.coordinates.latitude;//Math.round(1E4 * pos.coords.latitude) / 1E4;
        service.currentPosition.longitude =  pos.coordinates.longitude;//Math.round(1E4 * pos.coords.longitude) / 1E4};
        console.log('current coordinates: ', pos);
        $http({
          url: AppService.GetUrl('get-close-by/latitude/{latitude}/longitude/{longitude}', service.currentPosition),
          method: "GET"
        }).success(function (data, status, headers, config) {
          console.log('Nearby->success: ', data);
          deferred.resolve(data);
        }).error(function (data, status, headers, config) {
          console.log('Nearby->error: ', data);
          deferred.reject(data);
        });
      //});

      promise.success = function (fn) {
        promise.then(fn);
        return promise;
      }
      promise.error = function (fn) {
        promise.then(null, fn);
        return promise;
      }
      return promise;
    };

  	service.LocalCheck();

      return service;
})

//News Service
.service('NewsService', function(){
    var service = {
        viewArticle : {}
    };
    service.ApplyViewArticle = function(data){
    service.viewArticle = data;
    localStorage.setItem('viewArticle', JSON.stringify(data));
    };
    service.LocalCheck = function() {
        if (localStorage.getItem("viewArticle"))
        {
          //storage exists
          this.ApplyViewCourse(JSON.parse(localStorage.getItem("viewArticle")));
        }
      };

  	service.LocalCheck();

      return service;
})

//Tips Service
.service('TipsService', function(){
    var service = {
        viewTip : {}
    };
    service.ApplyViewTip = function(data){
      service.viewTip = data;
      localStorage.setItem('viewTip', JSON.stringify(data));
    };
    service.LocalCheck = function() {
        if (localStorage.getItem("viewTip"))
        {
          //storage exists
          this.ApplyViewCourse(JSON.parse(localStorage.getItem("viewTip")));
        }
      };

  	service.LocalCheck();

      return service;
});
