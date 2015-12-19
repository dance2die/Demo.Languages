/// <reference path="../typings/angularjs/angular.d.ts" />
/// <reference path="../typings/angularjs/angular-route.d.ts" />
(function () {
    "use strict";
    //var angular: any;
    var app = angular.module("homeIndexApp", ["ngRoute"]);
    app.controller("homeIndexCtrl", function ($scope, $http) {
        $scope.testAlert = function () {
            alert("test alert in AngularJS within TypeScript file");
        };
    });
})();
//# sourceMappingURL=homeIndex.js.map 
//# sourceMappingURL=homeindex.js.map