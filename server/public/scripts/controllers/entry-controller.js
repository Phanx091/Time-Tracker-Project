app.controller('EntryController', ['$http','EntryService', 'ProjectService', '$mdToast', '$animate', function($http, EntryService, ProjectService, $mdToast, $animate){
    var self = this;
    console.log('EntryController is loaded');

    self.entries = EntryService.entries; // object of array from entry
    self.getTask = EntryService.getTask; // get entry
    self.postEntry = EntryService.postEntry; // post entry
    self.deleteTask = EntryService.deleteTask; // delete 
    self.getProject = ProjectService.getProject; // get project 
    self.listing = ProjectService.listing; // object of array from project 
    self.displayProject = ProjectService.listing;   
    self.getTask();
    self.getProject();
}]); // end of controller
