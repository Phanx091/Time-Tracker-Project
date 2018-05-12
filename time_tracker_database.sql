-- query for task
CREATE TABLE "task" (
    "id" SERIAL PRIMARY KEY,
    "task_name" VARCHAR(400) NOT NULL,
	"posting_date" DATE NOT NULL DEFAULT CURRENT_DATE,
	"start_at" TIME NOT NULL,
	"end_at" TIME NOT NULL
	"project_id" integer
);
-- query for projects 
CREATE TABLE "projects" (
	"id" SERIAL PRIMARY KEY,
	"project_name" VARCHAR(200) NOT NULL
);

INSERT INTO "task" ("task_name", "posting_date", "start_at", "end_at")
VALUES ('Project scoping','2018-5-10', '8:00', '12:00'), 
('Project scoping','2018-5-10', '1:00', '4:00'), 
('Project scoping','2018-5-9', '2:00', '5:00'), 
('Project scoping','2018-5-8', '3:00', '1:00'), 
('Project scoping','2018-5-7', '4:00', '2:00'), 
('Project scoping','2018-4-6', '5:00', '3:00'), 
('Project scoping','2018-4-5', '6:00', '4:00'), 
('Project scoping','2018-4-4', '7:00', '5:00'), 
('Project scoping','2018-3-3', '8:00', '6:00'), 
('Project scoping','2018-3-2', '9:00', '7:00'), 
('Project scoping','2018-3-1', '10:00', '8:00'), 
('Project scoping','2018-4-30', '11:00', '12:00');

INSERT INTO "projects" ("project_name")
VALUES ('time-tracker-project'), 
('time-tracker-zero'), 
('time-tracker-one'), 
('time-tracker-two'), 
('time-tracker-three'), 
('time-tracker-four'); 

SELECT * FROM "task";
SELECT * FROM "projects";

CREATE TABLE "task_projects" (
	id SERIAL PRIMARY KEY,
	"task_id" INT REFERENCES "task" ON DELETE CASCADE,
	"project_id" INT REFERENCES "projects" ON DELETE CASCADE
);



INSERT INTO "task_projects" ("task_id", "project_id") 
VALUES (13, 1), (10, 1), (3, 1), (4, 4), (9, 5), (1, 4), (8, 2), (5, 2);



SELECT "task"."task_name", "task"."posting_date", "task"."start_at", "task"."end_at", array_to_string(array_agg("projects"."project_name"), ', ') AS projects
FROM "task"
JOIN "task_projects" ON "task"."id" = "task_projects"."task_id"
JOIN "projects" ON "task_projects"."task_id" = "projects"."id"
GROUP BY "task"."id";
-- using this one
SELECT "task"."task_name", "task"."posting_date", "task"."start_at", "task"."end_at", "task"."id", array_to_string(array_agg("projects"."project_name"), ', ') AS projects
FROM "task"
JOIN "task_projects" ON "task"."id" = "task_projects"."task_id"
JOIN "projects" ON "task_projects"."task_id" = "projects"."id"
GROUP BY "task"."id";

SELECT * FROM "task"
JOIN "projects" ON "task"."id" = "projects"."id";

SELECT * FROM "task"
CROSS JOIN "projects" ON "task"."id" = "projects"."id";

SELECT * FROM "task" CROSS JOIN "projects";

SELECT "task"."task_name", "task"."posting_date", "task"."start_at", "task"."end_at", "task"."id", array_agg(DISTINCT "project_name") AS projects
FROM "task"
JOIN "task_projects" ON "task"."id" = "task_projects"."task_id"
JOIN "projects" ON "task_projects"."task_id" = "projects"."id"
GROUP BY "task"."id";







SELECT "task_projects"."project_id",
"task"."task_name", "task"."posting_date", "task"."start_at", "task"."end_at",
array_agg("task"."task_name") as projects
FROM "task_projects"
FULL JOIN "task" ON "task"."id" = "task_projects"."project_id"
FULL JOIN "projects" ON "projects"."id" = "task_projects"."project_id"
GROUP BY "task_projects"."project_id",
"task"."task_name", "task"."posting_date", "task"."start_at", "task"."end_at";


SELECT "task_projects"."project_id",
"task"."task_name", "task"."posting_date", "task"."start_at", "task"."end_at",
array_agg("task"."task_name") as projects
FROM "task_projects"
INNER JOIN "task" ON "task"."id" = "task_projects"."task_id"
INNER JOIN "projects" ON "projects"."id" = "task_projects"."project_id"
GROUP BY "task_projects"."project_id",
"task"."task_name", "task"."posting_date", "task"."start_at", "task"."end_at";



ALTER TABLE "public"."task"
  ADD COLUMN "project_id" integer,
  ADD CONSTRAINT "project_id" FOREIGN KEY ("project_id") REFERENCES "public"."projects"("id") ON DELETE CASCADE;



UPDATE "public"."task" SET "project_id"=3 WHERE "id"=8 RETURNING "id", "task_name", "posting_date", "start_at", "end_at", "project_id";
UPDATE "public"."task" SET "project_id"=6 WHERE "id"=3 RETURNING "id", "task_name", "posting_date", "start_at", "end_at", "project_id";
UPDATE "public"."task" SET "project_id"=2 WHERE "id"=5 OR "id"=10 OR "id"=12 RETURNING "id", "task_name", "posting_date", "start_at", "end_at", "project_id";
UPDATE "public"."task" SET "project_id"=5 WHERE "id"=6 OR "id"=7 OR "id"=11 RETURNING "id", "task_name", "posting_date", "start_at", "end_at", "project_id";
UPDATE "public"."task" SET "project_id"=1 WHERE "id"=2 OR "id"=9 OR "id"=13 RETURNING "id", "task_name", "posting_date", "start_at", "end_at", "project_id";
UPDATE "public"."task" SET "project_id"=4 WHERE "id"=1 OR "id"=4 RETURNING "id", "task_name", "posting_date", "start_at", "end_at", "project_id";