const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');


router.get('/', (req,res) => {
    const queryText = `SELECT * FROM "task"
                       JOIN "projects" ON "project_id" = "projects"."id";`;
    pool.query(queryText)
    .then((results) => {
        res.send(results.rows);
        console.log(results.rows);
    })
    .catch((error) => {
        alert('Error on router.get');
        res.sendStatus(500);
    });
});

router.post('/', (req,res) => {
    const postEntry = req.body;
    const queryText = `INSERT INTO "task" ("task_name", "posting_date", "start_at", "end_at", "project_id")
                       VALUES ($1, $2, $3, $4, $5);`;
    pool.query(queryText, [postEntry.task_name, postEntry.posting_date, postEntry.start_at, postEntry.end_at, postEntry.project_id])
    .then((result) => {
        res.sendStatus(200);
    })
    .catch((error) => {
        console.log('Error on router.post', error);
        res.sendStatus(500);
    });
});








module.exports = router;