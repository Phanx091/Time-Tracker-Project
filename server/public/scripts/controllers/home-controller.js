app.controller('HomeController', ['$http','TimeService', function($http, TimeService){
    var self = this;
    console.log('HomeController is loaded');

    self.getTask = TimeService.getTask;
    self.displayTask = TimeService.listing;
    self.getTask();
    
}]);