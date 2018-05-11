app.controller('ProjectsController', ['$http','TimeService', function($http, TimeService){
    var self = this;
    console.log('ProjectsController is loaded');

    self.getProjectShow = TimeService.listingProject; // get projects from database 
    self.postProject = TimeService.postProject; // posting to new project 
    self.getProject = TimeService.getProject;
    self.getProject();

}]);