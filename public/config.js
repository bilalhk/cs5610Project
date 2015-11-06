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
			.when("/new_game", {
				templateUrl: "new_game/new_game.view.html"
			})
			.when("/leaderboard", {
				templateUrl: "leaderboard/leaderboard.view.html"
			})
			.otherwise({
				redirectTo: "/login"
			});
	});
	
})();