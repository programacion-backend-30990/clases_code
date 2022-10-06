var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const swaggerUI = require('swagger-ui-express')
const swaggerJsdoc = require('swagger-jsdoc')

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "My API doc para Daniel COnrad",
      description: "A simple and beautiful CRUD made doc"
    }    
  },
  apis: ['./docs/**/*.yaml']
}

const specs = swaggerJsdoc(options)




var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(specs))

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// Volvemos a las 21:02 arg 

module.exports = app;
