"use strict";
angular.module('app').service('service1', function ($scope, $http, $q) {
    this.myAsyncFunction = function(){
        var defer = $q.defer();
        $http.get('/someDataurl')
            .success(function(data){
                $scope.data = data;
                defer.resolve(data);
            })
            .error(function(err){
                alert(err);
                defer.reject(err);
            });
        return defer.promise;
    }
});