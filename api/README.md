# Adonis v5 GraphQL Starter
See my Adonisql-spdr repo for the older Adonis v4 example.
Adonis.js made a disruptive change to Typescript, breaking any v4 examples you might find.

This is an example dashboard, using data scraped from CraigsList

## Requirements
* nodejs >= v14.x LTS

### Optional
* [Volta](https://volta.sh/) Ensures correct node version. Available as `brew install volta`

## Setup

Use the adonis command to install the blueprint

```bash
git clone https://github.com/bingalls/adonisql.git
cd adonisql
npm install
cp .env.example .env
node ace key:generate   #copy generated key into .env
npm run start
```

## Run
`open http://127.0.0.1:3333/graphiql` # OSX; Linux: `xdg-open`

In the left graphiql window, try these example graphql statements
* QUERY: ` {postings{email, description}} `
* ` {posting{email, description}} `    # first listing, only
* ` mutation{ createPosting(href: "https://localhost", summary: "test posting") } `

## Database Option
Sqlite is the default database for development.
Create empty database & grant permissions.
Edit database configuration in .env

### Migrations
Run the following command to run startup migrations.

```bash
cd adonisql
node ace invoke @adonisjs/lucid   # select your database driver
node ace build
```
If the following commands are available, run them. This section is impacted
by Adonis v5 coming out of RC status.
```bash
node ace migration:run
node ace db:seed
```
## How to Use
Currently, this serves a simplistic example API for a dashboard, using 
postings scraped from CraigsList.
Change this to your need, by editing 
* app/data/schema.ts
* app/data/resolvers.ts
After changing the name of your schema from Postings, update
* app/Models/Posting.ts
* start/routes.ts

## Notice
It might be necessary to disable CSRF in config/shield.js to allow the /graphiql development tool (i.e. route).
Re-enable CSRF for production

Npm package dependencies can be version sensitive. Upgrade carefully in
small increments, and stay with Node LTS versions.

Adonisjs v5 rc's unit test framework is currently rolling out

