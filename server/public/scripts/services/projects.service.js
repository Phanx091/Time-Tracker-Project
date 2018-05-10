app.service('TimeService', ['$http', function($http) {
    var self = this;
    self.listing = { list: [] };


    self.getTask = function() {
        $http({
            method: 'GET',
            url: '/home', 
        }).then(function(response) {
            self.listing.list = response.data;
            console.log('getTask successful', response);
            console.log(self.listing.list);
        }).catch(function(error) {
            console.log('error on getTask', error)
        });
    }













}])