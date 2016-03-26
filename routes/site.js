module.exports = function(app) {

  var site = app.controllers.site;

  app.get('/',
    site.index
  );

  app.get('/camera/home/',
    site.home
  );

};