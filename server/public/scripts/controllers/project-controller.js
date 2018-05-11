app.controller('ProjectsController', ['$http','TimeService', function($http, TimeService){
    var self = this;
    console.log('ProjectsController is loaded');

    self.getProject = TimeService.listing; // get projects from database 
    self.postProject = TimeService.postProject; // posting to new project 
    
}]);