const express = require('express');
const bodyParser = require('body-parser');

const adminRoutes = require('./routes/admin');
const homeRoutes = require('./routes/home');

const app = express();

app.use(bodyParser.urlencoded());

app.use(adminRoutes);
app.use(homeRoutes);


app.listen(3000);