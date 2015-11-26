(function() {
	"use strict"
	
	angular.module("YeOldArena").controller("DuelController", duelController);
	
	function duelController($state, $stateParams) {
		var world = $stateParams.world;
		$state.go("duel.cardsDisplayed", {world: world});
	}
	
})()