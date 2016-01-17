angular
	.module("myApp.greet", ["ngRoute"])
	.config(function($routeProvider){
		$routeProvider
			.when("/greet", {
				templateUrl : 'greet/greet.html',
				controller : 'greetController'
			});
	})
	.controller("greetController", function($scope){
		$scope.name = '';
		$scope.message = '';
		$scope.greet = function(){
			$scope.message = 'Hi '+$scope.name + ", Have a nice day!";
		}
	})
	.filter('trimText', function(){
		return function(data){
			return data.length < 20 ? data : data.substr(0,20) + '...';
		}
	});
