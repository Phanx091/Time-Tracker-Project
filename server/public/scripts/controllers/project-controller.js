app.controller('ProjectsController', ['$http','ProjectService', function($http, ProjectService){
    var self = this;
    console.log('ProjectsController is loaded');

    self.displayProject = ProjectService.listing; // get projects from database 
    self.postProject = ProjectService.postProject; // posting to new project 
    self.getProject = ProjectService.getProject;
    self.deleteProject = ProjectService.deleteProject;
    self.getProject();

}]);