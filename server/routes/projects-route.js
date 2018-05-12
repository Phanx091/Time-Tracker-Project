const express = require("express");
const router = express.Router();
const pool = require("../modules/pool");

router.post("/", (req, res) => {
  const postThisProject = req.body;
  const queryText = `INSERT INTO "projects" ("project_name")
                       VALUES ($1);`;
  pool
    .query(queryText, [postThisProject.project_name])
    .then(result => {
      res.sendStatus(200);
    })
    .catch(error => {
      console.log("Error on router.post");
      res.sendStatus(500);
    });
}); // end of router.post

router.delete("/", (req, res) => {
  console.log("DELETE/task");
  const deleteProject = req.query.id;
  const queryText = 'DELETE FROM "projects" WHERE "id" = $1';
  pool
    .query(queryText, [deleteProject])
    .then(response => {
      res.sendStatus(200);
      console.log(`delete success ${deleteProject}`);
    })
    .catch(error => {
      console.log(`error on router.delete in entry ${error}`);
      res.sendStatus(500);
    });
}); // end of router.delete

router.get("/", (req, res) => {
  const queryText = `
    SELECT "projects"."id", "projects"."project_name", 
    SUM("task"."hours") 
    FROM "projects" 
    FULL JOIN "task" ON "projects"."id"="task"."project_id" 
    GROUP BY "projects"."id";`;
  pool
    .query(queryText)
    .then(results => {
      res.send(results.rows);
    })
    .catch(error => {
      console.log(`router.get/projects ${error}`);
      res.sendStatus(500);
    });
}); // end of router.get

module.exports = router;
