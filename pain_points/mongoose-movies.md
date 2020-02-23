# Mongoose movies pain points

## DON'T FORGET ##

- Don't forget to do **npm install** so that you install all the dependencies you need at once (otherwise you are going to have error in the console for every module you don't have). 
- Also, define the **.env** file as precised in the lab as you are using the PORT variable in bin/www
- Write your css in the **scss file** !

## DON'T GET CONFUSED ##

- The lab was created with Express Generator. The structure of an app created with Express generator is a little bit different from the one you used until now building an app from scratch. 
Until now, the main logic of your app was in app.js / server.js. **With Express generator, this logic is splitted between the app.js/server.js, and a file called www in the bin folder**. That is why your "dev" script in your package.json might seems strange to you, but it does basically the same thing as when you do nodemon app.js/server.js. **Don't forget to change it**  so that it also takes care of hbs and js changes: **"DEBUG=starter-code:* nodemon ./bin/www -e hbs, js"**

## DON'T FREAK OUT ##

- You are going to need a **seed file**. The purpose of this file is to seed your database with data, so that you can work on it later on. In your seed file, you are going to need to: 
  - create your data (as an array per model)
  - require mongoose and connect to the database
  - use create or insertMany to actually create those instances in the database
  - run this code once by using node seeds.js
  
## MORE ABOUT TRICKY ITERATIONS ##

### Iteration 1 ###
- *"In the create method's callback, display feedback."*: basically you want to display something when the action is done, successfully or not
- *"Check the database with the mongo command to confirm that your data was saved."*: you could simply check it in MongoDB Compass instead

### Iteration 2 ###
*"If there's an error, call the route's next function and return the error."*: you basically want to catch the error and display it if there's one

### Iteration 3 ###
*"In the views/celebrities/index.hbs view file: As part of the loop that displays each celebrity's name, add a link that goes to the /celebrities/:id route with the :id replaced by the actual celebrity's id."*
That is basically using an "a" tag with a href that contains the id of the element you are looping over in the each loop

### Iteration 4 ###
Use create() new element. Since create() also does the saving, you do not need to use save()

