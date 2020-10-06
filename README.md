# project1: Gets user input form data and adds it to mongoDb. Also displays and deletes the data.

-The entry point for the application is app.js
-The connections folder contains express routes; routes.js connects to the database and add user data, and delete_route.js connects to the database and deletes user.
-The models folder contains user.js which creates a mongodb model.
-The node_moduels folder contains all the application dependancies, i.e. mongoose, mocha, express, body-parser and ejs.
-The public folder contains all the css styles.
-The test folder is used to test all connections and other database manipulations before they are used in the connections folder. Mocha is the testing environment used.
-The views folder contains ejs files that are rendered by express and sent to the user.


To use the app
1. Install mongodb on your computer.
2. Install node.
3. Download the repository.
4. Open command prompt or windows powershell and navigate to the folder.
5 Run the command 'node app'.
6. Open a browser and  enter the address 'localhost:3000'.
