app.service('ProjectService', ['$http', function($http) {
    var self = this;
    self.listing = { 
        list: []
     };

     

    self.getProject = function() {
        $http({
            method: 'GET',
            url: '/projects', 
        }).then(function(response) {
            self.listing.list = response.data;
            console.log('successful self.getProject', response);
        }).catch(function(error) {
            console.log(`error on getTask ${error}`)
        });
    } // end of self.getProject

    self.postProject = function(newProject) {
        $http({
            method: 'POST',
            url: '/projects',
            data: newProject
        }).then(function(response) {
            self.getProject();
            console.log('successful self.postProject', response)
        }).catch(function(error) {
            console.log(`error on self.postProject ${error}`)
        });
    } // end of self.postProject 

    self.deleteProject = function(id) {
        $http({
            method: 'DELETE',
            url: '/projects',
            params: id
        }).then((response) => {
            self.getProject();
        })
        .catch((error) => {
            console.log(`error on self.deleteProject ${error}`);
        });
    } // end of self.deleteProject
}]) // end of app.service