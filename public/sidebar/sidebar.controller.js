(function() {
	"use strict"
	
	angular.module("YeOldArena").controller("SidebarController", sidebarController);
	
	function sidebarController($scope, $location) {
		
		var sidebarNavs = [{name: "Home", link: "#/home"},
						   {name: "Profile", link: "#/profile"},
						   {name: "Admin", link: "#/admin"},
						   {name: "Forms", link: "#/forms"}];
		
		$scope.sidebarNavs = sidebarNavs;
		$scope.$location = $location;
	}
	
})();