const express = require('express');
const router = require('express-promise-router')();

const sampleController = require(__base + 'app/controllers/sampleController');
const { validateBody, schemas, validateQuery, validateParams} = require(__base + 'app/helpers/routeHelpers');


router.route('/do-something')
    .post(sampleController.doSomething);


module.exports = router;