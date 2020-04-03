CREATE TABLE "public"."User" (
  id SERIAL PRIMARY KEY NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  name VARCHAR(100)
);

CREATE TABLE "public"."Basket" (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(100) NOT NULL,
  birthdate DATE NOT NULL,
  address TEXT,
  user INTEGER NOT NULL,
  FOREIGN KEY (user) REFERENCES "public"."User"(id)
);

CREATE TABLE "public"."Gift" (
  id SERIAL PRIMARY KEY NOT NULL,
  title VARCHAR(50) UNIQUE NOT NULL,
  description TEXT,
  link TEXT,
  image TEXT,
  public BOOLEAN NOT NULL DEFAULT false
);
