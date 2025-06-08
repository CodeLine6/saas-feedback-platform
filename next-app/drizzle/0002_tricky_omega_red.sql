CREATE TABLE "feedbacks" (
	"id" serial PRIMARY KEY NOT NULL,
	"project_id" integer,
	"user_name" text,
	"user_email" text,
	"message" text,
	"rating" integer
);
--> statement-breakpoint
ALTER TABLE "projects" ALTER COLUMN "url" SET NOT NULL;