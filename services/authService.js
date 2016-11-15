/**
 * fileName: authService.js
 * createdBy: Pranali Patil
 * purpose: validates the user and provides authentication throughout the application
 */
angular.module('myApp').service('authService',authService);
    function authService(restService,localStorageService,$state,$rootScope){
        /**
         * @method: sets the token while login
         */
        this.loginAuth = function(path,data,cb){
            restService.postRequest(path,data,cb).success(function(){
                $state.go('main');
            });
            function cb(data,error){
                console.log('token set');
                $rootScope.tkn = data.headers()['x-ekincare-key'];
                // console.log($rootScope.tkn);
                localStorageService.set('token',data.headers()['x-ekincare-key']);
            }
        };
        /**
         * @method: authenticates the user when require
         */
        this.isAuthenticated = function(key){
            if(key === localStorageService.get('token'))
                return true;
            else
                return false;
        };
        this.skipIfLoggedIn = function(){
            if(localStorageService.get('token'))
                $state.go('main');
        };
        /**
         * @method: logout wii erase all the data from previous session
         */
        this.logout = function(){
            localStorageService.clearAll();
            $state.go('login');
        }
    }