/**
 * FileName:loginctrl.js
 * CreatedBy: Pranali
 * purpose : Authenticate user using ligin credentials
 */
angular.module('myApp')
    .controller("loginCtrl", function($scope,$state,$location,$http,localStorageService,authService,$rootScope) {
        /* this function called on clicking from buttton
         */
        authService.skipIfLoggedIn($rootScope.tkn);
        $scope.data = {email:'tech@ekincare.com',password:'Foobar123'};
        $scope.login = function() {
            console.log("Login");
            authService.loginAuth('login',$scope.data,cb);
            function cb(data,error){
                console.log(data);
            }
        };
    });
