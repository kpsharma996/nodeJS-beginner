const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded());


app.use('/', (req, res, next) => {
    console.log('Always runs');
    next();
});

app.use('/add-user', (req, res, next) => {
    res.send('<form action="/user" method="POST"><input type="text" name="username"><button type="submit">Submit</button></form>');
});

app.post('/user', (req, res, next) => {
    console.log('Body : ', req.body);
    res.send(req.body);
})

app.listen('3000');