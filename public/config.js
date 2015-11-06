(function() {
	"use strict"
	
	angular.module("YeOldArena").config(function($routeProvider) {
		$routeProvider
			.when("/login", {
				templateUrl: "login/login.view.html"
			})
			.when("/profile", {
				templateUrl: "profile/profile.view.html"
			})
			.otherwise({
				redirectTo: "/login"
			});
	});
	
})();