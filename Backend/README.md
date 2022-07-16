# Awesome Notes Backend

Simple web application that allows you to take notes, tag
and filter them.

## Live demo

[Link to the API!](https://awesome-notes-backend.herokuapp.com/)

## Use cases

1. The backend app exposes a REST API that is the way in which the frontend app communicates with the backend.

2. The backend app is separated into layers (e.g., Controllers, Services, DAOs/Repositories, etc.).

## Required to run the app

- Node.js v16.14.2
- NPM v8.8.0
- PostgreSQL v14.3
- Bcrypt v5.0.1
- Cors v2.8.5
- Dotenv v16.0.1
- Express 4.18.1
- Jsonwebtoken v8.5.1
- Pg v8.7.3
- Pg-hstore v2.3.4
- Sequelize v6.21.3

# How to run the App manually

Go to the project root directory, and in the terminal run...

### `cd Backend`

In order to run the backend is necessary to make the following modifications...

1. Create a .env file in root directory
2. Add the next lines to the .env file

- POSTGRES_DB= "Your Postgres DB name"
- POSTGRES_USER= "Your Postgres user"
- POSTGRES_PASSWORD= "Your Postgres password"
- POSTGRES_HOST=localhost
- ACCESS_TOKEN_SECRET= "You need to create a Secret Token"

3. Modify the /config/config.json with your postgres data (This is necessary to run the migration - After the migration you can delete the config.json file).

4. Create the DB and the Migration. In the terminal run...

### `npm install`

### `npm run create`

### `npm run migrate`

### `npm run create-seed`

5. You can now delete the /config/config.json file.

6. Start the server. In the terminal run...

### `npm start` - runs the server on http://localhost:5000
