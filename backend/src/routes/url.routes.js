const express = require('express');
const router = express.Router();
const urlController = require('../controller/url.controller');

router.post('/generate-url', urlController.generateUrl);

module.exports = router;