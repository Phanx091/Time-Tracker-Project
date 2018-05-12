
app.service('EntryService', ['$http', function($http) {
    var self = this;

    self.dataEntry = {
        entry_task: '',
        date: '',
        start_time: new Date(),
        end_time: new Date(),
        input_hours: '',
        project_id: ''
    }; // end of objects 
    
    self.newEntry = function(newPost) {
        let input_hours = (newPost.end_time - newPost.start_time) / (1000 * 60 * 60);
        self.newDataEntry = {
            entry_task: newPost.entry,
            date: newPost.date,
            start_time: newPost.start_time,
            end_time: newPost.end_time,
            input_hours: hours,
            project_id: newPost.project_id
        };
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
            self.dataEntry = response.data;
            console.log('successful self.getTask', response);
        }).catch(function(error) {
            console.log('error on self.getTask', error)
        });
    } // end of self.getTask
    self.deleteTask = function(taskDelete) {
        $http({
            method: 'DELETE',
            url: '/entry',
            params: taskDelete
        }).then((response) => {
            self.getTask();
        })
        .catch((error) => {
            console.log('error on self.deleteTask', error);
        });
    } // end of self.deleteTask
    self.getTask();
}]); // end of app.service
