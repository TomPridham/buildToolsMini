"use strict";
angular.module('app').controller('aboutCtrl', function ($scope, service1, service2, service3) {
    $state.whatever = ['some junk'];

    $state.myFunc = function(){
        alert('hi');
        console.log('bruh');
        //do other things.
    };
    $state.myOtherfunction= function(){
        alert('This is the other function')
    }
});