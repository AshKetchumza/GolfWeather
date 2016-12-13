// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

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
        templateUrl: 'templates/settings.html'
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
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/my-courses');
})

//Course Service
.service('CourseService', function(){
    var service = {
        viewCourse : {}
    };
    service.ApplyViewCourse = function(data){
      service.viewCourse = data;
      localStorage.setItem('viewCourse', JSON.stringify(data)); 
      return service.viewCourse;
    };
    service.LocalCheck = function() {
        if (localStorage.getItem("viewCourse"))
        {
          //storage exists
          this.ApplyViewCourse(JSON.parse(localStorage.getItem("viewCourse")));
        }
      };
    	
  	service.LocalCheck();
         
      return service;
});
