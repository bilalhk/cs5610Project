(function() {
	"use strict"
	
	angular.module("YeOldArena").config(function($routeProvider) {
		$routeProvider
			.when("/login", {
				templateUrl: "login/login.view.html",
			})
			.otherwise({
				redirectTo: "/login"
			});
	});
	
})();