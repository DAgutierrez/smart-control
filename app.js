var express = require('express');
var load = require('express-load');
var path = require('path');
var swig =  require('swig');
var mqtt    = require('mqtt');
var client  = mqtt.connect('mqtt://test.mosquitto.org');


var app =  express();
var http = require('http').Server(app);
var io = require('socket.io')(http);


client.on('connect', function () {
  console.log('connected to mqtt');
  client.subscribe('Pir');
//   client.publish('presence', 'Hello mqtt');
});

io.on('connection', function(socket){
  console.log('a user connected');


  client.on('message', function (topic, message) {
    // message is Buffer
    console.log(message.toString());
    socket.emit('message', message.toString());
  });
  
  // 
});


  



http.listen(3000, function(){
  console.log('listening on *:3000');
});

// app.listen(3000, function(){
//   console.log('listening on *:3000');
// });


/*===== LOAD CONFIG, CONTROLLERS AND ROUTES ======*/

load('config')
  .then('controllers')
  .then('routes')
  .into(app);



/*===== CONFIG APP ======*/

app.
use( express.static(path.join(__dirname, 'public')) )  // define folder public for static files

app.set('views', __dirname + '/views') // define folder views

app.set('env', app.config.env.mode); // define env mode
// pass variables to view
if(app.get('env') === 'development') {
  app.locals.mode   = 'development';
  app.locals.pretty = true;
}





// console.log('server started 127.0.0.1:3000');



/*===== CONFIG TEMPLATE ENGINE ======*/

// setting template engine
swig.setDefaults({ varControls: ['<%=', '%>'] });

app.engine('html',swig.renderFile);

app.set('view engine', 'html');

// Swig will cache templates for you, but you can disable
// that and use Express's caching instead, if you like:
app.set('view cache', false);
// To disable Swig's cache, do the following:
swig.setDefaults({ cache: false });
// NOTE: You should always cache templates in a production environment.
// Don't leave both of these to `false` in production!



/*===== CONFIG MQtt ======*/

//  client.on('connect', function () {
//     client.subscribe('Pir');
//   //   client.publish('presence', 'Hello mqtt');
//   });
 
//   client.on('message', function (topic, message) {
//     // message is Buffer 
//     console.log(message.toString());
//       // client.end();
//   });
  
  // socket io



/*===== ERROR HANDLER ======*/

// error 404
app.use( function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error 500
if (app.get('env') === 'development') {
  // Development error handler
  app.use( function(err, req, res) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// Production error handler
app.use( function(err, req, res) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});



