const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');


router.get('/', (req,res) => {
    const queryText = `SELECT * FROM "projects" JOIN "task" ON "project_id" = "projects"."id";`;
    pool.query(queryText)
    .then((results) => {
        res.send(results.rows);
    })
    .catch((error) => {
        alert('Error on router.get');
        res.sendStatus(500);
    });
}); // end of router.get

router.post('/', (req,res) => {
    const posting = req.body;
    const queryText = `INSERT INTO "task" ("entry_task", "project_id", "date", "start_time", "end_time", "hours")
                       VALUES ($1, $2, $3, $4, $5, $6);`;
    pool.query(queryText, [posting.entry_task, posting.project_id, posting.date, posting.start_time, posting.end_time, posting.hours])
    .then((result) => {
        res.sendStatus(200);
    })
    .catch((error) => {
        console.log('Error on router.post', error);
        res.sendStatus(500);
    });
}); // end of router.post

router.delete('/:id', (req,res) => {
    console.log(req.query);
    const deleteTask = req.params.id;
    console.log(deleteTask);
    const queryText = 'DELETE FROM "task" WHERE "id" = $1;';
    pool.query(queryText,[deleteTask]).then((response) => {
        res.sendStatus(200);
        console.log('delete success', response);
    })
    .catch((error) => {
        console.log('error on router.delete in entry', error);
        res.sendStatus(500);
    });
}); // end of router.delete
module.exports = router;