angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout, $state) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

})

.controller('MyCoursesCtrl', function($scope, $state, CourseService) {

    $scope.selectedCourse = CourseService.viewCourse;

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
      'details' : 'Tiger Woods officially committed to the 2017 Genesis Open, held at Riviera where Woods made his first PGA Tour start at age 
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
