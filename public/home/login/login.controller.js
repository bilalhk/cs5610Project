(function() {
	"use strict"
	
	angular.module("YeOldArena").controller("LoginController", function($scope, $rootScope, $state) {
		
		$rootScope.user = null;
		
		$scope.login = function() {
			$rootScope.user = {username: $scope.username};
			$state.go("profile");
		}
		
	})
	
})();