angular.module("myApp")
    .controller("mainCtrl", function($scope, $http, authService,$rootScope) {
        // authService.skipIfLoggedIn();
        $rootScope.logout = function(){
            window.onpopstate = function (e) { window.history.forward(1); }
            authService.logout();
        };

      // var data=
        // var config = {
        //     headers: {
        //         "content-type": "application/json",
        //         "data": JSON.stringify({
        //             "email": "example@mail.com",
        //             "name": "enterprises Use",
        //             "admin_id": 26,
        //             "admin_type": "enterprises"
        //         })
        //     }
        // };
        // $http.get("https://staging.ekincare.com/enterprises/123/users", function(data, status) {
        //     console.log("Status::" + status);
        //     console.log("Data:" + data);
        // });
    })
