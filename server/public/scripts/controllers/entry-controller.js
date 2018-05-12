app.controller('EntryController', ['$http','EntryService', 'ProjectService', function($http, EntryService, ProjectService){
    var self = this;
    console.log('EntryController is loaded');

    

    self.entries = EntryService.entries; // object of array from entry

    self.getTask = EntryService.getTask; // get task
    self.postEntry = EntryService.postEntry; // post
    self.deleteTask = EntryService.deleteTask; // delete 

    self.getProject = ProjectService.getProject; // get project 
    self.listing = ProjectService.listing; // object of array from project 
    self.displayProject = ProjectService.listing;
   
    self.getTask();
    self.getProject();
    

}]);
