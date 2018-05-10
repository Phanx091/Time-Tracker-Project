const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');


router.get('/', (req,res) => {
    const queryText = `SELECT "task"."task_name", "task"."posting_date",
    "task"."start_at", "task"."end_at", "task"."id", 
    array_to_string(array_agg("projects"."project_name"), ', ') AS projects
    FROM "task" JOIN "task_projects" ON "task"."id" = "task_projects"."task_id"
    JOIN "projects" ON "task_projects"."task_id" = "projects"."id"
    GROUP BY "task"."id";`;
    pool.query(queryText)
    .then((results) => {
        res.send(results.rows);
        console.log(results.rows);
        console.log(queryText);
    })
    .catch((error) => {
        alert('Error on router.get');
        res.sendStatus(500);
    });
});








module.exports = router;