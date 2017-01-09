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
  })
  
  .state('app.search-courses', {
    url: '/search-courses',
    views : {
      'menuContent' : {
        templateUrl: 'templates/search-courses.html',
        controller: 'SearchController'
      }
    }
  })

   .state('app.search-results', {
     url: '/search-results/:countryID/:keyword',
     views : {
       'menuContent' : {
         templateUrl: 'templates/search-results.html',
         controller: 'SearchController'
       }
     }
    })
  
  .state('app.course-directory', {
     url: '/course-directory',
     views : {
       'menuContent' : {
        templateUrl: 'templates/course-directory.html',
        controller: 'SearchController'
      }
    }
  })

  .state('app.courses-nearby', {
    url: '/courses-nearby',
    views : {
      'menuContent' : {
        templateUrl: 'templates/nearby.html',
        controller: 'SearchController'
      }
    }
 });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/search-courses');
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

  service.GetUserSettings = function() {
    var data = { temp: 'metric', clock: '24', homeView: 'MC' };
    //
    console.log(localStorage.getItem("GWUserSettings"));

    if (!localStorage.getItem("GWUserSettings"))
    {
      service.ApplyUserSettings(data);
    }else {
      data = JSON.parse(localStorage.getItem("GWUserSettings"));
    }

    return data;
  };

  service.ApplyUserSettings = function(data) {
    localStorage.setItem('GWUserSettings', JSON.stringify(data));
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
        },
        continents: [
          {name:'Africa', id:'AF'},
          {name:'Asia', id:'AS'},
          {name:'Europe', id:'EU'},
          {name:'North America', id:'NA'},
          {name:'Oceania', id:'OC'},
          {name:'South America', id:'SA'}
        ],
        countries: [
          {id:'AL', name:'Albania'},
          {id:'DZ', name:'Algeria'},
          {id:'AD', name:'Andorra'},
          {id:'AO', name:'Angola'},
          {id:'AI', name:'Anguilla'},
          {id:'AG', name:'Antigua and Barbuda'},
          {id:'AR', name:'Argentina'},
          {id:'AW', name:'Aruba'},
          {id:'AU', name:'Australia'},
          {id:'AT', name:'Austria'},
          {id:'BS', name:'Bahamas'},
          {id:'BH', name:'Bahrain'},
          {id:'BD', name:'Bangladesh'},
          {id:'BB', name:'Barbados'},
          {id:'BE', name:'Belgium'},
          {id:'BZ', name:'Belize'},
          {id:'BJ', name:'Benin'},
          {id:'BM', name:'Bermuda'},
          {id:'BT', name:'Bhutan'},
          {id:'BO', name:'Bolivia'},
          {id:'BW', name:'Botswana'},
          {id:'BR', name:'Brazil'},
          {id:'BN', name:'Brunei'},
          {id:'BG', name:'Bulgaria'},
          {id:'BF', name:'Burkina Faso'},
          {id:'BI', name:'Burundi'},
          {id:'KH', name:'Cambodia'},
          {id:'CM', name:'Cameroon'},
          {id:'CA', name:'Canada'},
          {id:'CV', name:'Cape Verde'},
          {id:'KY', name:'Cayman Islands'},
          {id:'CF', name:'Central African Republic'},
          {id:'TD', name:'Chad'},
          {id:'CL', name:'Chile'},
          {id:'CN', name:'China'},
          {id:'CO', name:'Colombia'},
          {id:'CK', name:'Cook Islands'},
          {id:'CR', name:'Costa Rica'},
          {id:'HR', name:'Croatia'},
          {id:'CU', name:'Cuba'},
          {id:'CW', name:'Curacao'},
          {id:'CY', name:'Cyprus'},
          {id:'CZ', name:'Czech Republic'},
          {id:'CD', name:'Democratic Republic of the Congo'},
          {id:'DK', name:'Denmark'},
          {id:'DJ', name:'Djibouti'},
          {id:'DO', name:'Dominican Republic'},
          {id:'EC', name:'Ecuador'},
          {id:'EG', name:'Egypt'},
          {id:'SV', name:'El Salvador'},
          {id:'GQ', name:'Equatorial Guinea'},
          {id:'EE', name:'Estonia'},
          {id:'ET', name:'Ethiopia'},
          {id:'FJ', name:'Fiji'},
          {id:'FI', name:'Finland'},
          {id:'FR', name:'France'},
          {id:'GF', name:'French Guiana'},
          {id:'PF', name:'French Polynesia'},
          {id:'GA', name:'Gabon'},
          {id:'GM', name:'Gambia'},
          {id:'DE', name:'Germany'},
          {id:'GH', name:'Ghana'},
          {id:'GR', name:'Greece'},
          {id:'GD', name:'Grenada'},
          {id:'GP', name:'Guadeloupe'},
          {id:'GU', name:'Guam'},
          {id:'GT', name:'Guatemala'},
          {id:'GY', name:'Guyana'},
          {id:'HN', name:'Honduras'},
          {id:'HK', name:'Hong Kong'},
          {id:'HU', name:'Hungary'},
          {id:'IS', name:'Iceland'},
          {id:'IN', name:'India'},
          {id:'ID', name:'Indonesia'},
          {id:'IE', name:'Ireland'},
          {id:'IL', name:'Israel'},
          {id:'IT', name:'Italy'},
          {id:'CI', name:'Ivory Coast'},
          {id:'JM', name:'Jamaica'},
          {id:'JP', name:'Japan'},
          {id:'JO', name:'Jordan'},
          {id:'KZ', name:'Kazakhstan'},
          {id:'KE', name:'Kenya'},
          {id:'KW', name:'Kuwait'},
          {id:'LA', name:'Laos'},
          {id:'LV', name:'Latvia'},
          {id:'LB', name:'Lebanon'},
          {id:'LT', name:'Lithuania'},
          {id:'LU', name:'Luxembourg'},
          {id:'MO', name:'Macao'},
          {id:'MG', name:'Madagascar'},
          {id:'MW', name:'Malawi'},
          {id:'MY', name:'Malaysia'},
          {id:'MT', name:'Malta'},
          {id:'MH', name:'Marshall Islands'},
          {id:'MQ', name:'Martinique'},
          {id:'MU', name:'Mauritius'},
          {id:'MX', name:'Mexico'},
          {id:'MA', name:'Morocco'},
          {id:'MZ', name:'Mozambique'},
          {id:'MM', name:'Myanmar'},
          {id:'NA', name:'Namibia'},
          {id:'NP', name:'Nepal'},
          {id:'NL', name:'Netherlands'},
          {id:'AN', name:'Netherlands Antilles'},
          {id:'NC', name:'New Caledonia'},
          {id:'NZ', name:'New Zealand'},
          {id:'NI', name:'Nicaragua'},
          {id:'NG', name:'Nigeria'},
          {id:'MP', name:'Northern Mariana Islands'},
          {id:'NO', name:'Norway'},
          {id:'OM', name:'Oman'},
          {id:'PK', name:'Pakistan'},
          {id:'PA', name:'Panama'},
          {id:'PG', name:'Papua New Guinea'},
          {id:'PY', name:'Paraguay'},
          {id:'PE', name:'Peru'},
          {id:'PH', name:'Philippines'},
          {id:'PL', name:'Poland'},
          {id:'PT', name:'Portugal'},
          {id:'PR', name:'Puerto Rico'},
          {id:'QA', name:'Qatar'},
          {id:'CG', name:'Republic of the Congo'},
          {id:'RE', name:'Reunion'},
          {id:'RO', name:'Romania'},
          {id:'RU', name:'Russia'},
          {id:'RW', name:'Rwanda'},
          {id:'KN', name:'Saint Kitts and Nevis'},
          {id:'LC', name:'Saint Lucia'},
          {id:'VC', name:'Saint Vincent and the Grenadines'},
          {id:'WS', name:'Samoa'},
          {id:'SA', name:'Saudi Arabia'},
          {id:'SN', name:'Senegal'},
          {id:'RS', name:'Serbia'},
          {id:'CS', name:'Serbia and Montenegro'},
          {id:'SC', name:'Seychelles'},
          {id:'SL', name:'Sierra Leone'},
          {id:'SG', name:'Singapore'},
          {id:'SK', name:'Slovakia'},
          {id:'SI', name:'Slovenia'},
          {id:'SB', name:'Solomon Islands'},
          {id:'ZA', name:'South Africa'},
          {id:'KR', name:'South Korea'},
          {id:'ES', name:'Spain'},
          {id:'LK', name:'Sri Lanka'},
          {id:'SD', name:'Sudan'},
          {id:'SR', name:'Suriname'},
          {id:'SZ', name:'Swaziland'},
          {id:'SE', name:'Sweden'},
          {id:'CH', name:'Switzerland'},
          {id:'TW', name:'Taiwan'},
          {id:'TZ', name:'Tanzania'},
          {id:'TH', name:'Thailand'},
          {id:'TG', name:'Togo'},
          {id:'TT', name:'Trinidad and Tobago'},
          {id:'TN', name:'Tunisia'},
          {id:'TR', name:'Turkey'},
          {id:'TC', name:'Turks and Caicos Islands'},
          {id:'VI', name:'U.S. Virgin Islands'},
          {id:'UG', name:'Uganda'},
          {id:'UA', name:'Ukraine'},
          {id:'AE', name:'United Arab Emirates'},
          {id:'GB', name:'United Kingdom'},
          {id:'US', name:'United States'},
          {id:'UY', name:'Uruguay'},
          {id:'UZ', name:'Uzbekistan'},
          {id:'VU', name:'Vanuatu'},
          {id:'VE', name:'Venezuela'},
          {id:'VN', name:'Vietnam'},
          {id:'ZM', name:'Zambia'},
          {id:'ZW', name:'Zimbabwe'}
        ]
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

    service.Search = function(countryID, keyword) {
      var deferred = $q.defer();
	    var promise = deferred.promise;
      $http({
        url: AppService.GetUrl('search/country/{id}/keywords/{keywords}', {id: countryID, keywords: keyword}),
        method: "GET"
      }).success(function (data, status, headers, config) {
        console.log('Search->success: ', data);
        deferred.resolve(data);
      }).error(function (data, status, headers, config) {
        console.log('Search->error: ', data);
        deferred.reject(data);
      });

      promise.success = function (fn) {
        promise.then(fn);
        return promise;
      }
      promise.error = function (fn) {
        promise.then(null, fn);
        return promise;
      }
      return promise;
    }

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
