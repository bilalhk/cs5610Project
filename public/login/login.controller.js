(function() {
	"use strict"
	
	angular.module("YeOldArena").controller("LoginController", function($scope, $rootScope, $location) {
		
		$rootScope.user = null;
		
		$scope.login = function() {
			$rootScope.user = {username: $scope.user};
			$location.url("/profile");
		}
		
	});
	
})();