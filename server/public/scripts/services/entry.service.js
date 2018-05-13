
app.service('EntryService', ['$http', function($http) {
    var self = this;
    self.entries = { 
        list: []
     };
    
    self.postEntry = function(newPost) {
        newPost.hours = (newPost.end_time - newPost.start_time) / (1000 * 60 * 60);
        $http({
            method: 'POST',
            url: '/entry',
            data: newPost
        }).then(function(response) {
            self.getTask();
            console.log('successful self.newEntry', response)
        }).catch(function(error) {
            console.log('error on self.newEntry', error)
        });
    } // end of self.newEntry
    self.getTask = function() {
        $http({
            method: 'GET',
            url: '/entry', 
        }).then(function(response) {
            self.entries.list = response.data;
            console.log('successful self.getTask', response);
        }).catch(function(error) {
            console.log('error on self.getTask', error)
        });
    } // end of self.getTask
    self.deleteTask = function(task) {
        console.log(task);
        $http({
            method: 'DELETE',
            url: `/entry/${task.id}`,
        }).then((response) => {
            self.getTask();
        })
        .catch((error) => {
            console.log(`error on self.deleteTask ${error}`);
        });
    } // end of self.deleteTask
    self.getTask();
}]); // end of app.service
