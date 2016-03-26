exports.index = function(req, res, next) {
  res.render('site/index');
};

exports.home = function(req, res, next) {
  res.render('site/home');
};
