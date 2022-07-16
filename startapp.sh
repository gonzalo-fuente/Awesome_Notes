#!/bin/bash

set -e

#Run the Backend
cd Backend/
npm install
npm run create
npm run migrate
npm run create-seed
npm start &
BACKEND_PID=$!

#Run the Frontend
cd ..
cd Frontend/
yarn install
yarn start &
FRONTEND_PID=$!
google-chrome http://localhost:3000

# Kill running processes
kill -9 $BACKEND_PID
kill -9 $FRONTEND_PID