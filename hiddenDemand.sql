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

ALTER TABLE public.campaign ADD CONSTRAINT "campaing_fk0" FOREIGN KEY ("posted_by") REFERENCES  public.users("user_id");