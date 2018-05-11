app.controller('HomeController', ['$http','TimeService', function($http, TimeService){
    var self = this;
    console.log('HomeController is loaded');

    self.getTask = TimeService.getTask;
    self.displayTask = TimeService.listing;
    self.postTask = TimeService.postTask;
    self.getProject = TimeService.getProject;
    self.listingProject = TimeService.listingProject;
   
    self.getTask();
    self.getProject();
    

}]);
