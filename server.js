function requireHTTPS(req, res, next) {
  // The 'x-forwarded-proto' check is for Heroku
  if (!req.secure && req.get('x-forwarded-proto') !== 'https') {
      return res.redirect('https://' + req.get('host') + req.url);
  }
  next();
}
const express = require('express');
var path = require('path');
const app = express();
//app.use(requireHTTPS);

//app.use(express.static('./dist/pubappweb'));

// app.get('/*', function(req, res) {
//   res.sendFile('index.html', {root: 'dist/pubappweb'}
// );
// });
app.use(express.static(path.join(__dirname, '/dist/pubappweb')));
app.get('/*', function(req, res) {
  res.
sendFile(path.join(__dirname + '/dist/pubappweb/index.html'));
});

app.listen(process.env.PORT || 8080, () => {
  console.log("Server is listening on port "+ 8080);
});

// var express = require('express');
// var app = express();
// var path = require('path');

// app.use(express.static(path.join(__dirname, '/dist/pubappweb')));

// app.get('/*', function(req, res) {
//   res.

// sendFile(path.join(__dirname + '/dist/pubappweb/index.html'));
// });

// app.listen(8080, function () {
//   console.log('App started');
// });

