/// <reference path="../typings/angularjs/angular.d.ts" />
/// <reference path="../typings/angularjs/angular-route.d.ts" />
(function () {
    "use strict";
    //var angular: any;
    var app = angular.module("homeIndexApp", ["ngRoute"]);
    app.controller("homeIndexCtrl", function ($scope, $http) {
        alert("homeIndexCtrl");
    });
})();
//# sourceMappingURL=homeIndex.js.map