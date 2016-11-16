angular.module("myApp",["ui.router","ngMaterial","LocalStorageModule"])
.config(function($stateProvider,$urlRouterProvider){


    $urlRouterProvider.otherwise("login");
    $stateProvider
        .state("login",{
            url:"/login",
            templateUrl:"template/login.html",
            controller:"loginCtrl",
            resolve : {
                authCheck : authCheck
            }

        })
        .state("main",{
            url:"/main",
            templateUrl:"template/main.html",
            controller:"mainCtrl",
            resolve : {
                authCheck : authCheck
            }

        })
    });
    /**
     * @method authCheck - to check the authentication for redirection
     * @param $q
     * @param localStorageService
     * @param $location
     * @returns {Promise}
     */
    function authCheck($q,localStorageService,$location) {
        var deferred = $q.defer();
        if (localStorageService.get('token')){
            console.log('authenticated');
            deferred.resolve();
        } else {
            deferred.resolve();
            $location.path('/login');
        }
        return deferred.promise;
    }//end of function



