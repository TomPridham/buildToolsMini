"use strict";
angular.module('app').controller('homeCtrl',  ($scope, service1, service2, service3) => {
    $state.whatever = ['some junk'];

    $state.myFunc = ()=>{
        alert('hi');
        console.log('bruh');
        //do other things.
    };
    $state.myOtherfunction= ()=>{
        alert('This is the other function')
    }
});