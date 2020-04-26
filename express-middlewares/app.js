const express = require('express');

const app = express();

app.use((req, res, next) => {
    console.log('Middeleware one');
    next(); //forwards request to subsequent middleware
})

app.use((req, res, next) => {
    console.log('Middleware two');
    res.send('<h1>See console for output</h1>')
})

app.listen('3000');