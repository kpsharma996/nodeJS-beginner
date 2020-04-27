const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const adminRoutes = require('./routes/admin');
const homeRoutes = require('./routes/home');

const app = express();

app.use(bodyParser.urlencoded());

app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin',adminRoutes);
app.use(homeRoutes);


app.listen(3000);