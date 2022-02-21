
const express = require('express');

const app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');

const PORT = process.env.PORT || 3000;


app.use(express.static('public'));

app.get('/', function(req, res) {
  res.render('index');
});

app.listen(PORT, () => {
  console.log('Server connected at:',PORT);
});