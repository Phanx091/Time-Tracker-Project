
const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');


router.post('/', (req,res) => {
    const post = req.body;
    const queryText = `INSERT INTO "projects" ("project_name")
                       VALUES ($1);`;
    pool.query(queryText, [post.project_name]).then((result) => {
        res.sendStatus(200);
    })
    .catch((error) => {
        console.log('Error on router.post');
        res.sendStatus(500);
    });
});

router.get('/', (req,res) => {
    const queryText = `SELECT * FROM "task"
                       JOIN "projects" ON "task"."project_id" = "projects"."id";`;
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




module.exports = router;