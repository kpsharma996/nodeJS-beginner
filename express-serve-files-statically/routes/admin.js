const express = require('express');
const router = express.Router();
const path = require('path');

const rootDir = require('../util/path');

router.get('/add-user', (req, res, next) => {
   res.sendFile(path.join(rootDir, 'views', 'add-user.html'));
});

router.post('/add-user', (req, res, next) => {
    res.send(req.body);
})

module.exports = router;