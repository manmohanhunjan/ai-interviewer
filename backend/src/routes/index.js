const express = require('express');
const router = express.Router();

const urlRoutes = require('./url.routes');

router.use('/url', urlRoutes);

module.exports = router;