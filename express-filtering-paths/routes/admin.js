const express = require('express');
const router = express.Router();

router.get('/add-user', (req, res, next) => {
    res.write('<html> <body> <h1>Users page</h1>');
    res.write('<form action="add-user" method="POST"> <input type="text" name="username"><button type="submit">Save</button>');
    res.send();
});

router.post('/add-user', (req, res, next) => {
    res.send(req.body);
})

module.exports = router;