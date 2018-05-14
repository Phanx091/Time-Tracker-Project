app.controller('ProjectsController', ['$http','ProjectService', '$mdDialog', '$mdToast', '$animate', function($http, ProjectService, $mdDialog, $mdToast, $animate){
    var self = this;
    console.log('ProjectsController is loaded');

    self.displayProject = ProjectService.listing; // get projects from database 
    self.postProject = ProjectService.postProject; // posting to new project 
    self.getProject = ProjectService.getProject;
    self.deleteProject = ProjectService.deleteProject;
    self.getProject();
}]); // end of controller