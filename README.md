
# Events-API backend

To run-it you need to set up a MongoDB connection or use MongoAtlas, or another server for DB. 
Set up the **DB_URL** in your .env file

Server running on: https://events-api-two.vercel.app/

Current API routes:

Event routes:
```
GET /events/get/:userId&:date
POST /events/create
PATCH /events/update
DELETE /events/delete/:userId
DELETE /events/delete/date/:userId&:date
```

User routes:
```
GET /users
DELETE /users/:id
PATCH /users/:id
```

Authentication routes:
```
POST /auth/register
POST /auth/login
```

## Dependencies: Yarn and latest NodeJS

### To prepare and install packages

```
yarn
```

### To run it

```
yarn start
```
