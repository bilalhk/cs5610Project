(function() {
	"use strict"
	
	angular.module("YeOldArena").factory("duelService", duelService);
	
	function duelService($q) {
		var api = {
			startNewDuel: startNewDuel
		};
		
		function startNewDuel(character) {
			var deferred = $q.defer();
			var frontEndWorld = new FrontEndWorld(
				new Character("Jesus", [
				new Attribute("HP", 85),
				new Attribute("Speed", 40),
				new Attribute("Mana", 84),
				new Attribute("Attack", 54),
				new Attribute("Defence", 89)
				]),
				new Character("Goliath", [
				new Attribute("HP", 24),
				new Attribute("Speed", 44),
				new Attribute("Mana", 99),
				new Attribute("Attack", 24),
				new Attribute("Defence", 98)
				]));
			frontEndWorld.setPlayerTurn(true);
			deferred.resolve(frontEndWorld);
			
			return deferred.promise;
		}
		
		return api;
	}
	
})()