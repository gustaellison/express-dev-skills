const express = require('express');
var router = express.Router();
var skillsCtrl = require('../controllers/skills')


router.get('/', skillsCtrl.index)
router.get('/new', skillsCtrl.new) // ORDER MATTERS
router.get('/:id', skillsCtrl.show)

router.post('/', skillsCtrl.create)

module.exports = router // SHOULD BE AT END
