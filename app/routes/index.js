const router = require('express').Router();
const homeRoute = require('./home');

router.use(homeRoute);

module.exports = router;
