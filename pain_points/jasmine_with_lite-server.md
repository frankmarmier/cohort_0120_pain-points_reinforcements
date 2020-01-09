# Running Jasmine with lite-server
---------------------------------- 

### Lite-server

Lite server searches by default an ./index.html file located from the location you run your command from.

In order to open a different HTML file, we will need to override the default configuration of lite-server.

You will be required to install a special npm package.

Locate yourself at the same level of the SpecRunner.html file and create a `bs-config.js` file
This file allows us to override lite-server's default configuration
```
your-lab-name
    |
    starter-code
            |
            |-- SpecRunner.html
            |-- src
            |-- tests
            |-- bs-config.js
```

Inside `bs-config.js` copy/paste the following code:
```
module.exports = {
  server: {
    middleware: {
      // overrides the second middleware default with new settings
      1: require("connect-history-api-fallback")({
          // of course, this could be any *.html if you ever need to run in the future another file which isn't named index.
        index: "/SpecRunner.html",
        verbose: true
      })
    }
  }
};
```

Again, at the same level as the `bs-config.js` file, run in the shell (command-line) : 

``npm install connect-history-api-fallback --save-dev``

This will create a node_modules file, don't worry about this, more coming about it in module 2 !

Now simply run lite-server (again at the same level as your SpecRunner.html)  
This should open up the SpecRunner.html file in a window on your default browser.