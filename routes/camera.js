module.exports = function(app) {

  var camera = app.controllers.camera;

  app.post('/camera/control-left',
    camera.controlLeft
  );

  app.post('/camera/control-left-stop',
    camera.controlLeftStop
  );

  app.post('/camera/control-right',
    camera.controlRight
  );

  app.post('/camera/control-right-stop',
    camera.controlRightStop
  );

  app.post('/camera/control-up',
    camera.controlUp
  );

  app.post('/camera/control-up-stop',
    camera.controlUpStop
  );


  app.post('/camera/control-down',
    camera.controlDown
  );

  app.post('/camera/control-down-stop',
    camera.controlDownStop
  );

};