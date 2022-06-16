# Awesome Notes

Simple web application that allows you to take notes, tag
and filter them.

## Live demo

[Link to the site!](https://la-cuisine-de-ma-grand-mere.netlify.app/)

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

## Required to run the app

- Node.js v16.14.2
- Yarn v1.22.19
- @mui/icons-material v5.8.4
- @mui/material v5.8.4
- formik v2.2.9
- framer-motion v6.3.11
- react v18.2.0
- react-redux v8.0.2
- react-router-dom v6.3.0
- redux v4.2.0
- redux-thunk v2.4.1
- sweetalert v2.1.2
- yup v0.32.11

## How to run the App manually

Go to the project root directory, and in the terminal run...

### `yarn install`

### `yarn start` - runs the server on http://localhost:3000

# How to run the App with single command

In the terminal run...

### `./startapp.sh`
