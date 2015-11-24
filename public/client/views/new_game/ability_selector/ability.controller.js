(function() {
	"use strict"
	
	angular.module("YeOldArena").controller("AbilitySelectorController", abilitySelectorController);
	
	function abilitySelectorController() {
	
		this.availableAbilities = [{name: "Axe Throw"},
									 {name: "Heat Vision"},
									 {name: "Steel-toed Boot"},
									 {name: "Baseball Bat"}];
		
		this.selectedAbilities = [{name: "Heat Vision"},
									{name: "Baseball Bat"}];
									
		this.wisdomPoints = 21;
	}
	
})();