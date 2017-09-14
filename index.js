const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const session = require('express-session');
const NameRoutes = require('./regNumber');
const Models = require('./models');
const mongoUrl = process.env.MONGO_DB_URL || 'mongodb://localhost/regnumber';
const models = Models(mongoUrl);
const nameRoutes = NameRoutes(models);


var app = express();
app.use(express.static('public'))

app.engine('handlebars', exphbs({
  defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');
app.use(bodyParser.urlencoded({
  extended: false
}))
app.use(bodyParser.json())

app.use(session({
  secret: 'keyboard cat',
  cookie: {
    maxAge: 60000 * 30
  }
}));



app.get("/regNo", nameRoutes.regNo);
app.post('/regNo', nameRoutes.regNo1);


var port = process.env.PORT|| 3000;
app.listen(port, function() {


  console.log('Example app listening at http://%s:%s, ' + port);

});
