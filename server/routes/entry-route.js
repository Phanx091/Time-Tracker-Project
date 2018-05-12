const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');


router.get('/', (req,res) => {
    const queryText = `SELECT * FROM "task"
                       JOIN "projects" ON "project_id" = "projects"."id";`;
    pool.query(queryText)
    .then((results) => {
        res.send(results.rows);
    })
    .catch((error) => {
        alert('Error on router.get');
        res.sendStatus(500);
    });
});

router.post('/', (req,res) => {
    const posting = req.body;
    const queryText = `INSERT INTO "task" ("entry_task", "date", "start_time", "end_time", "project_id")
                       VALUES ($1, $2, $3, $4, $5);`;
    pool.query(queryText, [posting.entry_task, posting.date, posting.start_time, posting.end_time, posting.hours, posting.project_id])
    .then((result) => {
        res.sendStatus(200);
    })
    .catch((error) => {
        console.log('Error on router.post', error);
        res.sendStatus(500);
    });
});

router.delete('/', (req,res) => {
    console.log('DELETE/task');
    const deleteTask = req.query.id;
    console.log(deleteTask);
    const queryText = `DELETE FROM "task" WHERE "id" = $1;`;
    pool.query(queryText,[deleteTask]).then((results) => {
        res.sendStatus(200);
        console.log('delete success')
    })
    .catch((error) => {
        console.log('error on router.delete in entry', error);
        res.sendStatus(500);
    });
});
module.exports = router;