(function() {
	"use strict"
	
	angular.module("YeOldArena").config(function($stateProvider, $urlRouterProvider) {
		
		$urlRouterProvider.otherwise("/login");
		
		$stateProvider
			.state("login", {
				url: "/login",
				templateUrl: "login/login.view.html"
			})
			.state("profile", {
				url: "/profile",
				templateUrl: "profile/profile.view.html"
			})
			.state("new_game", {
				url: "/new_game",
				templateUrl: "new_game/new_game.view.html"
			})
			.state("leaderboard", {
				url: "/leaderboard",
				templateUrl: "leaderboard/leaderboard.view.html"
			})
			.state("leaderboard.users", {
				templateUrl: "leaderboard/users/users.view.html"
			})
			.state("leaderboard.characters", {
				templateUrl: "leaderboard/characters/characters.view.html"
			});
		
		
		
		
		/*$routeProvider
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
			});*/
	});
	
})();