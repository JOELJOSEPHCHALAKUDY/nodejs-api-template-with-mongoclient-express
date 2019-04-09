const express = require('express');
const httpSerice = require('http');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const morgan = require('morgan');
global.__base = __dirname + '/';


// wind up the app
const app = express();
const httpServer = httpSerice.createServer(app);
const router = express.Router();

// use mongoDb driver instead of mongoose  ( no need to use moongoose models here)

const mongodbutil = require(__base + "app/util/mongodbutil");
mongodbutil.connectToServer( function( err ) {

    // load the routes 
    const routes = require('./app/router');

    // set  all express Server settings 
    app.set('port', process.env.PORT || 4000);
    app.set('host', '0.0.0.0');

    // express middlewares
    app.use(morgan('dev'));
    app.use(bodyParser.json()); 
    // remove the bodyParser.urlencoded middleware from API routes to make it safe , also if not using tradional html form
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(function (req, res, next) {

        // website you wish to  allow to connet    
        res.setHeader('Access-Control-Allow-Origin','*');

        // request method you wish to allow
        res.setHeader('Access-Control-Allow-Methods','GET, POST, OPTION, PUT, PATCH, DELETE');

        // request headers you wish to allow 
        res.setHeader('Access-Control-Allow-Headers','X-Requested-With,content-type,Authorization');   

        // set to true if you need the website to include  cookies  in the  request  sent 
        // to the API (eg. in case you can see sessions )
        res.setHeader('Access-Control-Allow-Credentials','false');

        // pass to the next layer of middleware
        next();

    });





    // attach the routes 

    app.get('/', (req, res, next) =>{
        res.status(200).json({
            message : 'Welcome to customer billing micro-service API endpoint'
        })
    });

    app.use('/api',routes);

    // catch 404 and forward to error handler
    app.use((req, res, next) => {
        const  err = new Error('Not Found');
        err.status = 404;
        next(err);
    });

    // error handler functon
    app.use((err , req, res, next) => {

        
        const error = app.get('env') ==='development' ? err : {};
        const status = err.status || 500;

        // respond to client
        res.status(status).json({
            error: {
                    message: error.message
            }
        })

        // respond to ourself
        console.error(err);
    });






    // start listening to port

    httpServer.listen(app.get('port'),app.get('host'),function(){
        console.log("Listening on " + app.get('port'));
    });

});

module.exports = app;