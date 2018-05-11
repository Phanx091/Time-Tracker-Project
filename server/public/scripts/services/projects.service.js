app.service('TimeService', ['$http', function($http) {
    var self = this;
    self.listing = { list: [] };
    self.listingProject = { list: [] };


    self.getTask = function() {
        $http({
            method: 'GET',
            url: '/home', 
        }).then(function(response) {
            self.listing.list = response.data;
            console.log('getTask successful', response);
            // console.log(self.listing.list);
        }).catch(function(error) {
            console.log('error on getTask', error)
        });
    }

    self.getProject = function() {
        $http({
            method: 'GET',
            url: '/projects', 
        }).then(function(response) {
            self.listingProject.list = response.data;
            console.log('getTask successful', response);
        }).catch(function(error) {
            console.log('error on getTask', error)
        });
    }

    self.postTask = function(newPostOnTask) {
        $http({
            method: 'POST',
            url: '/home',
            data: newPostOnTask
        }).then(function(response) {
            self.getTask();
            console.log('successful postTask', response)
        }).catch(function(error) {
            console.log('error on postTask', error)
        });
    };

    self.postProject = function(newPostOnProject) {
        $http({
            method: 'POST',
            url: '/projects',
            data: newPostOnProject
        }).then(function(response) {
            self.getProject();
            console.log('successful postTask', response)
        }).catch(function(error) {
            console.log('error on postTask', error)
        });
    };
    

 







    self.getTask();


}])