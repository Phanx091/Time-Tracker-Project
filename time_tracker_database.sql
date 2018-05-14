-- query for task


CREATE TABLE "projects" (
	"id" SERIAL PRIMARY KEY,
	"project_name" VARCHAR(200) NOT NULL
);


CREATE TABLE "task" (
    "id" SERIAL PRIMARY KEY,
    "entry_task" VARCHAR(400) NOT NULL,
    "date" DATE NOT NULL DEFAULT CURRENT_DATE,
    "start_time" TIMESTAMP NOT NULL,
    "end_time" TIMESTAMP NOT NULL,
	"hours" DECIMAL(5,2) NOT NULL,
    "project_id" INT REFERENCES "projects" ON DELETE CASCADE 
);

INSERT INTO "projects" ("project_name")
VALUES ('Android Task Monitoring'), 
('Automated Canteen Ordering System using Android'), 
('Android Based Visual Product Identification For The Blind'), 
('Smart Health Prediction Using Data Mining'), 
('Efficient Doctor Patient Portal'), 
('Employee attendance System By Qr Scan'), 
('Three Level Password Authentication System'), 
('Android Vehicle Tracking Application'), 
('Storage/Energy efficient Cloud Computing'),
('Mobile Network Stability');

