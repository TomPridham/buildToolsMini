"use strict";
angular.module('app', ['ui.router'])
    .config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/");

        $stateProvider

            .state("home", {
                url: "/",
                templateUrl: "templates/home.html",
                controller: "homeCtrl"
            })

            .state("about", {
                url: "/about",
                templateUrl: "templates/about.html",
                controller: "aboutCtrl"
            })

            .state("whatever", {
                url: "/whatever",
                templateUrl: "templates/whatever.html",
                controller: "whateverCtrl"
            })
            .state("whatever2", {
                url: "/whatever2",
                templateUrl: "templates/whatever2.html",
                controller: "whatever2"
            })
            .state("whatever3", {
                url: "/whatever3",
                templateUrl: "templates/whatever3.html",
                controller: "whatever3"
            })
    });