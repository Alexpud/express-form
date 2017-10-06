const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const exampleController = require('./server/controllers').example;
var example = require('./server/routes/example');
// Set up the express app
const app = express();

// get an instance of router
var router = express.Router();

// route middleware that will happen on every request
router.use(function(req, res, next) {
    // log each request to the console
    console.log(req.method, req.url);
    // continue doing what we were doing and go to the route
    next();
});


// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Log requests to the console.
app.use(logger('dev'));
app.use('/api/example', example);

// Setup a default catch-all route that sends back a welcome message in JSON format.
app.get('*', (req, res) => {
    exampleController.hello();
    res.status(200).send({
        message: 'Welcome to the beginning of nothingness.',
    })
});
module.exports = app;