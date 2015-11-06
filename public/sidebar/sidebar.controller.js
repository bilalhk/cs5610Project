(function() {
	"use strict"
	
	angular.module("YeOldArena").controller("SidebarController", sidebarController);
	
	function sidebarController($scope, $location) {
		
		var sidebarNavs = [{name: "Profile", link: "#/profile"},
						   {name: "Start Game", link: "#/new_game"},
						   {name: "Leaderboard", link: "#/leaderboard"}];
		
		$scope.sidebarNavs = sidebarNavs;
		$scope.$location = $location;
	}
	
})();