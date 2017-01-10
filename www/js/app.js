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

 .state('app.search-continent-regions', {
   url: '/search-continent-regions',
   views : {
     'menuContent' : {
        templateUrl: 'templates/course-directory-countries.html',
        controller: 'SearchController'
      }
    }
  })

 .state('app.search-country-regions', {
   url: '/search-country-regions',
   views : {
     'menuContent' : {
        templateUrl: 'templates/course-directory-regions.html',
        controller: 'SearchController'
      }
    }
  })

 .state('app.search-region-subregions', {
   url: '/search-region-subregions',
   views : {
     'menuContent' : {
        templateUrl: 'templates/course-directory-subregions.html',
        controller: 'SearchController'
      }
    }
  })

 .state('app.search-region-courses', {
   url: '/search-region-courses',
   views : {
     'menuContent' : {
        templateUrl: 'templates/course-directory-courses.html',
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
 })
 ;
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
    console.log('URL: ', res);
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
        selectedContinent:{},
        selectedCountry: {},
        selectedRegion: {},
        selectedSubregion: {},
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
        	{ id: "AO",name: "Angola",continent: "AF" },
        	{ id: "BF",name: "Burkina Faso",continent: "AF" },
        	{ id: "BI",name: "Burundi",continent: "AF" },
        	{ id: "BJ",name: "Benin",continent: "AF" },
        	{ id: "BW",name: "Botswana",continent: "AF" },
        	{ id: "CD",name: "Democratic Republic of the Congo",continent: "AF" },
        	{ id: "CF",name: "Central African Republic",continent: "AF" },
        	{ id: "CG",name: "Republic of the Congo",continent: "AF" },
        	{ id: "CI",name: "Ivory Coast",continent: "AF" },
        	{ id: "CM",name: "Cameroon",continent: "AF" },
        	{ id: "CV",name: "Cape Verde",continent: "AF" },
        	{ id: "DJ",name: "Djibouti",continent: "AF" },
        	{ id: "DZ",name: "Algeria",continent: "AF" },
        	{ id: "EG",name: "Egypt",continent: "AF" },
        	{ id: "EH",name: "Western Sahara",continent: "AF" },
        	{ id: "ER",name: "Eritrea",continent: "AF" },
        	{ id: "ET",name: "Ethiopia",continent: "AF" },
        	{ id: "GA",name: "Gabon",continent: "AF" },
        	{ id: "GH",name: "Ghana",continent: "AF" },
        	{ id: "GM",name: "Gambia",continent: "AF" },
        	{ id: "GN",name: "Guinea",continent: "AF" },
        	{ id: "GQ",name: "Equatorial Guinea",continent: "AF" },
        	{ id: "GW",name: "Guinea-Bissau",continent: "AF" },
        	{ id: "KE",name: "Kenya",continent: "AF" },
        	{ id: "KM",name: "Comoros",continent: "AF" },
        	{ id: "LR",name: "Liberia",continent: "AF" },
        	{ id: "LS",name: "Lesotho",continent: "AF" },
        	{ id: "MA",name: "Morocco",continent: "AF" },
        	{ id: "MG",name: "Madagascar",continent: "AF" },
        	{ id: "ML",name: "Mali",continent: "AF" },
        	{ id: "MR",name: "Mauritania",continent: "AF" },
        	{ id: "MU",name: "Mauritius",continent: "AF" },
        	{ id: "MW",name: "Malawi",continent: "AF" },
        	{ id: "MZ",name: "Mozambique",continent: "AF" },
        	{ id: "NA",name: "Namibia",continent: "AF" },
        	{ id: "NE",name: "Niger",continent: "AF" },
        	{ id: "NG",name: "Nigeria",continent: "AF" },
        	{ id: "RE",name: "Reunion",continent: "AF" },
        	{ id: "RW",name: "Rwanda",continent: "AF" },
        	{ id: "SC",name: "Seychelles",continent: "AF" },
        	{ id: "SD",name: "Sudan",continent: "AF" },
        	{ id: "SH",name: "Saint Helena",continent: "AF" },
        	{ id: "SL",name: "Sierra Leone",continent: "AF" },
        	{ id: "SN",name: "Senegal",continent: "AF" },
        	{ id: "ST",name: "Sao Tome and Principe",continent: "AF" },
        	{ id: "SZ",name: "Swaziland",continent: "AF" },
        	{ id: "TD",name: "Chad",continent: "AF" },
        	{ id: "TG",name: "Togo",continent: "AF" },
        	{ id: "TN",name: "Tunisia",continent: "AF" },
        	{ id: "TZ",name: "Tanzania",continent: "AF" },
        	{ id: "UG",name: "Uganda",continent: "AF" },
        	{ id: "YT",name: "Mayotte",continent: "AF" },
        	{ id: "ZA",name: "South Africa",continent: "AF" },
        	{ id: "ZM",name: "Zambia",continent: "AF" },
        	{ id: "ZW",name: "Zimbabwe",continent: "AF" },
        	{ id: "AQ",name: "Antarctica",continent: "AN" },
        	{ id: "BV",name: "Bouvet Island",continent: "AN" },
        	{ id: "GS",name: "South Georgia and the South Sandwich Islands",continent: "AN" },
        	{ id: "HM",name: "Heard Island and McDonald Islands",continent: "AN" },
        	{ id: "TF",name: "French Southern Territories",continent: "AN" },
        	{ id: "AE",name: "United Arab Emirates",continent: "AS" },
        	{ id: "AF",name: "Afghanistan",continent: "AS" },
        	{ id: "AM",name: "Armenia",continent: "AS" },
        	{ id: "AZ",name: "Azerbaijan",continent: "AS" },
        	{ id: "BD",name: "Bangladesh",continent: "AS" },
        	{ id: "BH",name: "Bahrain",continent: "AS" },
        	{ id: "BN",name: "Brunei",continent: "AS" },
        	{ id: "BT",name: "Bhutan",continent: "AS" },
        	{ id: "CN",name: "China",continent: "AS" },
        	{ id: "CX",name: "Christmas Island",continent: "AS" },
        	{ id: "GE",name: "Georgia",continent: "AS" },
        	{ id: "HK",name: "Hong Kong",continent: "AS" },
        	{ id: "ID",name: "Indonesia",continent: "AS" },
        	{ id: "IL",name: "Israel",continent: "AS" },
        	{ id: "IN",name: "India",continent: "AS" },
        	{ id: "IQ",name: "Iraq",continent: "AS" },
        	{ id: "JO",name: "Jordan",continent: "AS" },
        	{ id: "JP",name: "Japan",continent: "AS" },
        	{ id: "KG",name: "Kyrgyzstan",continent: "AS" },
        	{ id: "KH",name: "Cambodia",continent: "AS" },
        	{ id: "KR",name: "South Korea",continent: "AS" },
        	{ id: "KW",name: "Kuwait",continent: "AS" },
        	{ id: "KZ",name: "Kazakhstan",continent: "AS" },
        	{ id: "LA",name: "Laos",continent: "AS" },
        	{ id: "LB",name: "Lebanon",continent: "AS" },
        	{ id: "LK",name: "Sri Lanka",continent: "AS" },
        	{ id: "MM",name: "Myanmar",continent: "AS" },
        	{ id: "MN",name: "Mongolia",continent: "AS" },
        	{ id: "MO",name: "Macao",continent: "AS" },
        	{ id: "MV",name: "Maldives",continent: "AS" },
        	{ id: "MY",name: "Malaysia",continent: "AS" },
        	{ id: "NP",name: "Nepal",continent: "AS" },
        	{ id: "OM",name: "Oman",continent: "AS" },
        	{ id: "PH",name: "Philippines",continent: "AS" },
        	{ id: "PK",name: "Pakistan",continent: "AS" },
        	{ id: "QA",name: "Qatar",continent: "AS" },
        	{ id: "SA",name: "Saudi Arabia",continent: "AS" },
        	{ id: "SG",name: "Singapore",continent: "AS" },
        	{ id: "TH",name: "Thailand",continent: "AS" },
        	{ id: "TM",name: "Turkmenistan",continent: "AS" },
        	{ id: "TR",name: "Turkey",continent: "AS" },
        	{ id: "TW",name: "Taiwan",continent: "AS" },
        	{ id: "UZ",name: "Uzbekistan",continent: "AS" },
        	{ id: "VN",name: "Vietnam",continent: "AS" },
        	{ id: "YE",name: "Yemen",continent: "AS" },
        	{ id: "AD",name: "Andorra",continent: "EU" },
        	{ id: "AL",name: "Albania",continent: "EU" },
        	{ id: "AT",name: "Austria",continent: "EU" },
        	{ id: "BE",name: "Belgium",continent: "EU" },
        	{ id: "BG",name: "Bulgaria",continent: "EU" },
        	{ id: "BY",name: "Belarus",continent: "EU" },
        	{ id: "CH",name: "Switzerland",continent: "EU" },
        	{ id: "CS",name: "Serbia and Montenegro",continent: "EU" },
        	{ id: "CY",name: "Cyprus",continent: "EU" },
        	{ id: "CZ",name: "Czech Republic",continent: "EU" },
        	{ id: "DE",name: "Germany",continent: "EU" },
        	{ id: "DK",name: "Denmark",continent: "EU" },
        	{ id: "EE",name: "Estonia",continent: "EU" },
        	{ id: "ES",name: "Spain",continent: "EU" },
        	{ id: "FI",name: "Finland",continent: "EU" },
        	{ id: "FO",name: "Faroe Islands",continent: "EU" },
        	{ id: "FR",name: "France",continent: "EU" },
        	{ id: "GB",name: "United Kingdom",continent: "EU" },
        	{ id: "GI",name: "Gibraltar",continent: "EU" },
        	{ id: "GR",name: "Greece",continent: "EU" },
        	{ id: "HR",name: "Croatia",continent: "EU" },
        	{ id: "HU",name: "Hungary",continent: "EU" },
        	{ id: "IE",name: "Ireland",continent: "EU" },
        	{ id: "IM",name: "Isle of Man",continent: "EU" },
        	{ id: "IS",name: "Iceland",continent: "EU" },
        	{ id: "IT",name: "Italy",continent: "EU" },
        	{ id: "JE",name: "Jersey",continent: "EU" },
        	{ id: "LI",name: "Liechtenstein",continent: "EU" },
        	{ id: "LT",name: "Lithuania",continent: "EU" },
        	{ id: "LU",name: "Luxembourg",continent: "EU" },
        	{ id: "LV",name: "Latvia",continent: "EU" },
        	{ id: "MC",name: "Monaco",continent: "EU" },
        	{ id: "MD",name: "Moldova",continent: "EU" },
        	{ id: "ME",name: "Montenegro",continent: "EU" },
        	{ id: "MK",name: "Macedonia",continent: "EU" },
        	{ id: "MT",name: "Malta",continent: "EU" },
        	{ id: "NL",name: "Netherlands",continent: "EU" },
        	{ id: "NO",name: "Norway",continent: "EU" },
        	{ id: "PL",name: "Poland",continent: "EU" },
        	{ id: "PT",name: "Portugal",continent: "EU" },
        	{ id: "RO",name: "Romania",continent: "EU" },
        	{ id: "RS",name: "Serbia",continent: "EU" },
        	{ id: "RU",name: "Russia",continent: "EU" },
        	{ id: "SE",name: "Sweden",continent: "EU" },
        	{ id: "SI",name: "Slovenia",continent: "EU" },
        	{ id: "SK",name: "Slovakia",continent: "EU" },
        	{ id: "SM",name: "San Marino",continent: "EU" },
        	{ id: "UA",name: "Ukraine",continent: "EU" },
        	{ id: "AG",name: "Antigua and Barbuda",continent: "NA" },
        	{ id: "AI",name: "Anguilla",continent: "NA" },
        	{ id: "AN",name: "Netherlands Antilles",continent: "NA" },
        	{ id: "AW",name: "Aruba",continent: "NA" },
        	{ id: "BB",name: "Barbados",continent: "NA" },
        	{ id: "BM",name: "Bermuda",continent: "NA" },
        	{ id: "BS",name: "Bahamas",continent: "NA" },
        	{ id: "BZ",name: "Belize",continent: "NA" },
        	{ id: "CA",name: "Canada",continent: "NA" },
        	{ id: "CR",name: "Costa Rica",continent: "NA" },
        	{ id: "CU",name: "Cuba",continent: "NA" },
        	{ id: "CW",name: "Curacao",continent: "NA" },
        	{ id: "DO",name: "Dominican Republic",continent: "NA" },
        	{ id: "GD",name: "Grenada",continent: "NA" },
        	{ id: "GL",name: "Greenland",continent: "NA" },
        	{ id: "GP",name: "Guadeloupe",continent: "NA" },
        	{ id: "GT",name: "Guatemala",continent: "NA" },
        	{ id: "HN",name: "Honduras",continent: "NA" },
        	{ id: "HT",name: "Haiti",continent: "NA" },
        	{ id: "JM",name: "Jamaica",continent: "NA" },
        	{ id: "KN",name: "Saint Kitts and Nevis",continent: "NA" },
        	{ id: "KY",name: "Cayman Islands",continent: "NA" },
        	{ id: "LC",name: "Saint Lucia",continent: "NA" },
        	{ id: "MQ",name: "Martinique",continent: "NA" },
        	{ id: "MS",name: "Montserrat",continent: "NA" },
        	{ id: "MX",name: "Mexico",continent: "NA" },
        	{ id: "NI",name: "Nicaragua",continent: "NA" },
        	{ id: "PA",name: "Panama",continent: "NA" },
        	{ id: "PR",name: "Puerto Rico",continent: "NA" },
        	{ id: "SV",name: "El Salvador",continent: "NA" },
        	{ id: "TC",name: "Turks and Caicos Islands",continent: "NA" },
        	{ id: "TT",name: "Trinidad and Tobago",continent: "NA" },
        	{ id: "US",name: "United States",continent: "NA" },
        	{ id: "VC",name: "Saint Vincent and the Grenadines",continent: "NA" },
        	{ id: "VI",name: "U.S. Virgin Islands",continent: "NA" },
        	{ id: "AS",name: "American Samoa",continent: "OC" },
        	{ id: "AU",name: "Australia",continent: "OC" },
        	{ id: "CK",name: "Cook Islands",continent: "OC" },
        	{ id: "FJ",name: "Fiji",continent: "OC" },
        	{ id: "GU",name: "Guam",continent: "OC" },
        	{ id: "KI",name: "Kiribati",continent: "OC" },
        	{ id: "MH",name: "Marshall Islands",continent: "OC" },
        	{ id: "MP",name: "Northern Mariana Islands",continent: "OC" },
        	{ id: "NC",name: "New Caledonia",continent: "OC" },
        	{ id: "NF",name: "Norfolk Island",continent: "OC" },
        	{ id: "NR",name: "Nauru",continent: "OC" },
        	{ id: "NU",name: "Niue",continent: "OC" },
        	{ id: "NZ",name: "New Zealand",continent: "OC" },
        	{ id: "PF",name: "French Polynesia",continent: "OC" },
        	{ id: "PG",name: "Papua New Guinea",continent: "OC" },
        	{ id: "PW",name: "Palau",continent: "OC" },
        	{ id: "SB",name: "Solomon Islands",continent: "OC" },
        	{ id: "TL",name: "East Timor",continent: "OC" },
        	{ id: "TO",name: "Tonga",continent: "OC" },
        	{ id: "TV",name: "Tuvalu",continent: "OC" },
        	{ id: "VU",name: "Vanuatu",continent: "OC" },
        	{ id: "WF",name: "Wallis and Futuna",continent: "OC" },
        	{ id: "WS",name: "Samoa",continent: "OC" },
        	{ id: "AR",name: "Argentina",continent: "SA" },
        	{ id: "BO",name: "Bolivia",continent: "SA" },
        	{ id: "BR",name: "Brazil",continent: "SA" },
        	{ id: "CL",name: "Chile",continent: "SA" },
        	{ id: "CO",name: "Colombia",continent: "SA" },
        	{ id: "EC",name: "Ecuador",continent: "SA" },
        	{ id: "GF",name: "French Guiana",continent: "SA" },
        	{ id: "GY",name: "Guyana",continent: "SA" },
        	{ id: "PE",name: "Peru",continent: "SA" },
        	{ id: "PY",name: "Paraguay",continent: "SA" },
        	{ id: "SR",name: "Suriname",continent: "SA" },
        	{ id: "UY",name: "Uruguay",continent: "SA" },
        	{ id: "VE",name: "Venezuela",continent: "SA" }
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

    service.CountriesForContinent = function(id) {
        var result = [];
        for (var i = 0; i < service.countries.length; i++) {
          if (service.countries[i].continent === id) {
            result.push(service.countries[i]);
          }
        }
        return result;
    };

    service.RegionsForCountry = function(countryID) {
      var deferred = $q.defer();
	    var promise = deferred.promise;
      $http({
        url: AppService.GetUrl('get-regions/country_id/{id}', {id: countryID}),
        method: "GET"
      }).success(function (data, status, headers, config) {
        console.log('RegionsForCountry->success: ', data);
        deferred.resolve(data);
      }).error(function (data, status, headers, config) {
        console.log('RegionsForCountry->error: ', data);
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

    service.GetCurrentConditions = function(courseID) {
      var deferred = $q.defer();
	    var promise = deferred.promise;
      $http({
        url: AppService.GetUrl('/get-current-json/id/{id}', {id: courseID}),
        method: "GET"
      }).success(function (data, status, headers, config) {
        console.log('GetCurrentConditions->success: ', data);
        deferred.resolve(data);
      }).error(function (data, status, headers, config) {
        console.log('GetCurrentConditions->error: ', data);
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
    };

    service.SubRegionsForRegion = function(regionID) {
      var deferred = $q.defer();
	    var promise = deferred.promise;
      $http({
        url: AppService.GetUrl('get-sub-regions/region_id/{id}', {id: regionID}),
        method: "GET"
      }).success(function (data, status, headers, config) {
        console.log('SubRegionsForRegion->success: ', data);
        deferred.resolve(data);
      }).error(function (data, status, headers, config) {
        console.log('SubRegionsForRegion->error: ', data);
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

    service.CoursesForRegion = function(subregionID) {
      var deferred = $q.defer();
	    var promise = deferred.promise;
      var url = AppService.GetUrl('get-courses-for-regions/country_id/{countryID}/region_id/{id}}', {countryID: service.selectedCountry.id, id: subregionID});
      if (subregionID != service.selectedRegion.id)
      {
        url = AppService.GetUrl('get-courses-for-regions/country_id/{countryID}/region_id/{regionID}/sub_region_id/{subregionID}', {countryID: service.selectedCountry.id, regionID: service.selectedRegion.id,  subregionID: subregionID});
      }
      $http({
        url: url,
        method: "GET"
      }).success(function (data, status, headers, config) {
        console.log('CoursesForRegion->success: ', data);
        deferred.resolve(data);
      }).error(function (data, status, headers, config) {
        console.log('CoursesForRegion->error: ', data);
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
