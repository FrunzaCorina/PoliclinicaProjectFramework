var app = angular.module("pacientApp");

	app.directive("menu", menu);
	app.directive("pacientSearch", pacientSearch);
	app.directive("pacientDisplay", pacientDisplay);
	app.directive("addPacient", addPacient);

function menu(){
	return {
		templateUrl: "menu.htm"
		};
}	

function pacientSearch(){
	return {
		templateUrl: "pacientsearch.htm"
	};
}

function pacientDisplay(){
	return {
		templateUrl: "pacientdisplay.htm"
	};
}

function addPacient(){
	return {
		templateUrl: "addPacient.htm"
	};
}