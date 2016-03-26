module.exports = function(app) {

  var pir = app.controllers.pir;

  app.get('/route/sensor/pir/',
    pir.index
  );


};