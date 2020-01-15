# chronometer-painpoints

Objective: create a chronometer

Two files:
- chronometer.js: for the logic of the chronometer
- main.js: for the dom manipulation

## chronometer.js

- First, create the chronometer class, with 2 properties and then methods.

- Use setInterval in your ```startClick``` method. Be careful while using ```setInterval```. Inside ```setInterval```, "this" will not refer to the object chronometer but to the global context. To fix that, either use arrow functions inside your setInterval to declare the function you want to repeat, or bind it

- To stop the chronometer: use clearInterval

- Make sure your logic works (you can see it in the console) and that you get the type of value you need, before working on the DOM

ex: in ```printSeconds``` in main.js you'll probably need the return value of ```chronometer.getSeconds()```. So make sure this value corresponds to what you need. 

**The main logic should be in chronometer.js, in main.js it's mainly about DOM manipulation, and using the data that is already ready to use**

## main.js

- Create a new chronometer, and use its different methods while interacting with the DOM (ex: button start triggers the startClick method of the chronometer)

- DOM elements also have their own logic (ex: all the buttons changes: from start to stop, from stop to start, from split to reset, from reset to split). This is not dependent on your chronometer methods (except the click events) but on classes that you have to toggle

- You use ```setInterval``` on the chronometer to make sure your counter updates. You could use it again in your ```printTime``` function, on the DOM side, but you don't have to, if you use callback functions!
