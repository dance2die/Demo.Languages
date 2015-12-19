/// <reference path="../typings/angularjs/angular.d.ts" />
/// <reference path="../typings/angularjs/angular-route.d.ts" />
(function() {
	"use strict";
	//var angular: any;
	var app = angular.module("homeIndexApp", ["ngRoute"]);
	app.controller("homeIndexCtrl", ($scope, $http) => {
		
		$scope.testAlert = () => {
			alert("test alert in AngularJS within TypeScript file");
		}
	});
})();
//# sourceMappingURL=homeIndex.js.map