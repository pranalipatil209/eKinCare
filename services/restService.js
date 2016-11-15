/**
 * Filename: restService.js
 * createdBy: Pranali Patil
 * purpose: service for REST call with base URL
**/
angular.module('myApp').service('restService',restService);
function restService($http,localStorageService){
    var baseUrl = 'https://staging.ekincare.com/v1/core/';
    /**
     *GET from server
     **/
    this.getRequest = function(path,query,cb){
        var getR = $http({
            method:"GET",
            url: baseUrl+path,
            headers:{
                "content-type":"application/json",
                "Access-Control-Expose-Headers":"*",
                "x-ekincare-key": localStorageService.get('token')
            }
        }).success(function(data){
            cb(data,null);
        }).error(function(err){
            cb(null,err);
        });
        return getR;
    };
    /**
     * POST to the server
     **/
    this.postRequest = function(path,data,cb){
        var postR = $http({
            method: "POST",
            url: baseUrl+path,
            headers:{
                "content-type":"application/json",
                "Access-Control-Expose-Headers":"*",
                "x-ekincare-key": localStorageService.get('token')
            },
            data: data
        }).success(function(data,status,headers){
            this.data ={data:data, headers:headers};
            cb(this.data,null);
        }).error(function(err){
            console.log('Sorry!!Something went wrong...');
            cb(null,err);
        });
        return postR;
    };
}
