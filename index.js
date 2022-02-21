
const express = require('express');

const app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');

const PORT = process.env.PORT || 3000;


app.use(express.static('public'));

app.get('/', function(req, res) {
  res.render('index');
});

app.get('/login', function(req, res) {
  res.render('auth/login');
});

app.get('/register', function(req, res) {
  res.render('auth/register');
});

app.get('/contact', function(req, res) {
  res.render('pages/contact');
});

app.get('/users-profile', function(req, res) {
  res.render('pages/profile');
});
app.get('/pages-faq', function(req, res) {
  res.send('Coming Soon');
});


app.listen(PORT, () => {
  console.log('Server connected at:',PORT);
});