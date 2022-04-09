SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;


CREATE TABLE public.campaign(
    "id" serial NOT NULL,
    "name" varchar NOT NULL,
    "posted_by" bigint NOT NULL,
    "company" varchar,
    "url" varchar,
    "description" varchar,
    "img" varchar,
    CONSTRAINT "campaign_pk" PRIMARY KEY ("id")


) WITH (
    OIDS=FALSE
);


CREATE TABLE public.users (
  "user_id" serial NOT NULL,
  "username" varchar NOT NULL UNIQUE,
  "password" varchar NOT NULL,
  "email" varchar NOT NULL UNIQUE,
  CONSTRAINT "users_pk" PRIMARY KEY ("user_id")
) WITH (
  OIDS=FALSE
);

CREATE TABLE public.user_comments(
    "comment" varchar,
    "campaign_id" bigint NOT NULL,
    "references" varchar,
    "user_id" bigint NOT NULL
) WITH (
  OIDS = FALSE
);


ALTER TABLE public.campaign ADD CONSTRAINT "campaign_fk0" FOREIGN KEY ("posted_by") REFERENCES  public.users("user_id");
ALTER TABLE public.user_comments ADD CONSTRAINT "user_comments_fk0" FOREIGN KEY ("campaign_id") REFERENCES public.campaign("id");
ALTER TABLE public.user_comments ADD CONSTRAINT "user_comments_fk1" FOREIGN KEY ("user_id") REFERENCES public.users("user_id");