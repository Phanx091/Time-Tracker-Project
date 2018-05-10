var pg = require('pg');

var config = {
    database: 'time_tracker_database',
    host: 'localhost',
    port: '5432',
    max: 10,
    idleTimeoutMillis: 1000
};
console.log(config);
module.exports = new pg.Pool(config);