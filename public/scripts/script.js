var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope', '$http', function($scope, $http){
  $scope.input = function(){
    console.log($scope.info);
    var sending = {
      thing: $scope.info
    };
    $http({
      method: 'POST',
      url: 'addInput',
      data: sending
    });
  };
}]);
