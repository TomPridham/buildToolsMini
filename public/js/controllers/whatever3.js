"use strict";
angular.module('app').controller('whatever3', function ($scope, service1, service2, service3) {
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