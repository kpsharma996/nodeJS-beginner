const express = require('express');

const app = express();

app.use('/users', (req, res, next) => {
    res.send('<h1>Users page</h1>')
})

app.use('/', (req, res, next) => {
    res.send('<h1> Welcome to express routing through middleware!</h1>');
});

app.listen('3000');