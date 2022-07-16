# Awesome Notes

Simple web application that allows you to take notes, tag
and filter them.

## Live demo

[Link to the site!](https://awesome-notes-react.netlify.app/)

The valid data to get a token are:

- Email: user@user.com
- Password: password

[Link to the API!](https://awesome-notes-backend.herokuapp.com/)

## Use cases

1. Login Form

The form should be rendered on any route if the user is not authenticated
Form fields:

- E-mail.
- Password.
- "Log in" button.

The valid data to get a token are:

- Email: user@user.com
- Password: password

2. My Notes

- As a user, I want to be able to create, edit and delete notes
- As a user, I want to archive/unarchive notes
- As a user, I want to list my active notes
- As a user, I want to list my archived notes
- As a user, I want to be able to add/remove categories to notes
- As a user, I want to be able to filter notes by category

3. The backend app exposes a REST API that is the way in which the frontend app communicates with the backend.

4. The backend app is separated into layers (e.g., Controllers, Services, DAOs/Repositories, etc.).

## Required to run the app

- Node.js v16.14.2
- NPM v8.8.0
- PostgreSQL v14.3
- Yarn v1.22.19
- @mui/icons-material v5.8.4
- @mui/material v5.8.4
- Formik v2.2.9
- Framer-motion v6.3.11
- React v18.2.0
- React-redux v8.0.2
- React-router-dom v6.3.0
- Redux v4.2.0
- Redux-thunk v2.4.1
- Sweetalert v2.1.2
- Yup v0.32.11
- Bcrypt v5.0.1
- Cors v2.8.5
- Dotenv v16.0.1
- Express 4.18.1
- Jsonwebtoken v8.5.1
- Pg v8.7.3
- Pg-hstore v2.3.4
- Sequelize v6.21.3

# How to run the App with single command

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

In the terminal run...

### `cd ..`

### `./startapp.sh`
