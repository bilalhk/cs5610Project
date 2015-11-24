(function() {
	"use strict"
	
	angular.module("YeOldArena").controller("NewGameController", newGameController);
	
	function newGameController($state) {
		
		this.startNewGame = function() {
			$state.go("duel.character_cards");
		}
	}
	
	
})();