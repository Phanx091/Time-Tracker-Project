
const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');


router.post('/', (req,res) => {
    const postThisProject = req.body;
    const queryText = `INSERT INTO "projects" ("project_name")
                       VALUES ($1);`;
    pool.query(queryText, [postThisProject.project_name]).then((result) => {
        res.sendStatus(200);
    })
    .catch((error) => {
        console.log('Error on router.post');
        res.sendStatus(500);
    });
});

router.get('/', (req,res) => {
    const queryText = `SELECT * FROM "projects";`;
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