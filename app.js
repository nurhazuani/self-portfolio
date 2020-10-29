const express = require('express')
const path = require('path');
const app = express()
const port = 3000


app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, "views")));

// app.get('/', (req, res) => {
//  res.send('profile World!')
// });

app.get('/', function (req, res) {
  var msg = "profile";
  res.render('profile', { message: msg })
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})