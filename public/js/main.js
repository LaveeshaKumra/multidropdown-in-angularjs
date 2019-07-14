
var app = angular.module('formExample', []);
app.controller("getValue", ['$scope', '$http', function($scope, $http) {
        $scope.url = 'http://localhost:4300/';
		$scope.displayData1 = function() {alert();
			$http.post('http://localhost:4300/getcountry').
			success(function(data, status) {
				
				//console.log(data);
				$scope.country = data;
			});
		}
		
		$scope.displayData2 = function() {
			$http.post('http://localhost:4300/getstate').
			success(function(data, status) {
				$scope.state = data;
			});
		}
		
		$scope.displayData3 = function() {
			$http.post('http://localhost:4300/getcity').
			success(function(data, status) {
				$scope.city = data;
			});
		}
		
		
		$scope.onUserChange1 = function() {
			var countryname = $scope.selectedId1.code;
		$http.post('http://localhost:4300/getstate',
		{"selectedId1":countryname}).success(function(data,result){
			$scope.state=data;
			});
			}
			
			$scope.onUserChange2 = function() {
			console.log($scope.selectedId2);
			var statename = $scope.selectedId2.code;
		$http.post('http://localhost:4300/getcity',
		{"selectedId2":statename}).success(function(data,result){
			$scope.city=data;
			});
			}			
			
}]);
			
