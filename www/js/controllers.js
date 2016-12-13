angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout, $state) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

})

.controller('MyCoursesCtrl', function($scope) {

    $scope.myCourses = [
        {
            name: "Milnerton",
            temp: "11°"    
        },
         {
            name: "Atlantic Beach",
            temp: "16°"    
        },
         {
            name: "Clovelly",
            temp: "17°"    
        },
         {
            name: "Metropiton",
            temp: "21°"    
        },
         {
            name: "Pearl Valley",
            temp: "13°"    
        },
         {
            name: "River Club",
            temp: "14°"    
        },
         {
            name: "Steenberg",
            temp: "22°"    
        },
         {
            name: "Sun City",
            temp: "19°"    
        },
         {
            name: "Augusta National",
            temp: "18°"    
        },
        {
            name: "Happy Land",
            temp: "14°"    
        }
    ];
    
    $scope.selectCourse = function(myCourse, index) {
        $scope.selectedCourse = myCourse;
    };
    
    $scope.editCourse = function() {
        $state.go('editCourse');
    };
    
})
