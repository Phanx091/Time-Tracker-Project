app.controller('EntryController', ['$http','EntryService', 'ProjectService', function($http, EntryService, ProjectService){
    var self = this;
    console.log('EntryController is loaded');

    

    self.displayTask = EntryService.dataEntry;
    self.getTask = EntryService.getTask;
    self.newEntry = EntryService.newEntry;
    self.deleteTask = EntryService.deleteTask;

    self.getProject = ProjectService.getProject; // get project 

   
    self.getTask();
    self.getProject();
    

}]);
