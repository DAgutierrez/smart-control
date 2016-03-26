module.exports = function(app) {

  var site = app.controllers.site;

  app.get('/',
    site.index
  );

  app.get('/site/home/',
    site.home
  );

};