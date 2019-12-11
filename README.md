# Sonotafy
CPSC 349 Project 2: Sonotafy React.js Project
Members:
  Nathaniel Richards - Team Lead and Firebase Expert
  David Lee - React and Style Expert
  Matthew Nguyen - Spotify API Expert
  Yafu Deng - React Expert and Other (Helped all other roles

Steps:
  1. Go to Sonotafy\web-api-auth-examples-master\authorization_code folder in an admin terminal
  2. Run npm install and then node app.js
  3. In a new admin terminal, go to Sonotafy\sonatafy react app folder
  4. Install Dependencies If Needed
      npm install react-router@3
      npm install --save firebase
      npm install spotify-web-api-js
  5. Run npm start 
  
Use Cases:
  1. Create Account with email and username on first page
     a. Enter usename and passsword 
     b. Click Submit
     c. Your account is now in firebase, you can go back and log in
  2. Log In and Search For Mood Music
     a. Log in with credentials of created account
     b Click Spotify Button
     c. Click Log in to Spotify Button
     d. Search for a track based on mood
     e. Of the 5 tracks you can click them to preview them
