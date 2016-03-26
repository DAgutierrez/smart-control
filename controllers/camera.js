var request = require('request');

exports.controlLeft = function(req, res, next) {
  console.log('here controller left');
  request('http://192.168.0.11:81/decoder_control.cgi?command=6&user=admin&pwd=admin', function (error, response, body) {
    if (error)
    {
      console.log(error);
    }
    console.log(response.statusCode);
    // console.log(response);
    if (!error && response.statusCode == 200) {
      res.send(body);
    }


  })

};

exports.controlLeftStop = function(req, res, next) {

  request('http://192.168.0.11:81/decoder_control.cgi?command=7&user=admin&pwd=admin', function (error, response, body) {
    if (error)
    {
      console.log(error);
    }

    // console.log(response);
    if (!error && response.statusCode == 200) {

      res.send(body);

    }

  })

};

exports.controlRight = function(req, res, next) {

  request('http://192.168.0.11:81/decoder_control.cgi?command=4&user=admin&pwd=admin', function (error, response, body) {
    if (error)
    {
      console.log(error);
    }

    // console.log(response);
    if (!error && response.statusCode == 200) {
      res.send(body);

    }

  })

};

exports.controlRightStop = function(req, res, next) {

  request('http://192.168.0.11:81/decoder_control.cgi?command=5&user=admin&pwd=admin', function (error, response, body) {
    if (error)
    {
      console.log(error);
    }

    // console.log(response);
    if (!error && response.statusCode == 200) {
      res.send(body);

    }

  })

};

exports.controlUp = function(req, res, next) {

  request('http://192.168.0.11:81/decoder_control.cgi?command=0&user=admin&pwd=admin', function (error, response, body) {
    if (error)
    {
      console.log(error);
    }

    // console.log(response);
    if (!error && response.statusCode == 200) {
      res.send(body);

    }

  })

};

exports.controlUpStop = function(req, res, next) {

  request('http://192.168.0.11:81/decoder_control.cgi?command=1&user=admin&pwd=admin', function (error, response, body) {
    if (error)
    {
      console.log(error);
    }

    // console.log(response);
    if (!error && response.statusCode == 200) {
      res.send(body);

    }

  })

};

exports.controlDown = function(req, res, next) {

  request('http://192.168.0.11:81/decoder_control.cgi?command=2&user=admin&pwd=admin', function (error, response, body) {
    if (error)
    {
      console.log(error);
    }

    // console.log(response);
    if (!error && response.statusCode == 200) {
      res.send(body);

    }

  })

};

exports.controlDownStop = function(req, res, next) {

  request('http://192.168.0.11:81/decoder_control.cgi?command=3&user=admin&pwd=admin', function (error, response, body) {
    if (error)
    {
      console.log(error);
    }

    // console.log(response);
    if (!error && response.statusCode == 200) {
      res.send(body);

    }

  })

};