var express = require('express');
var router = express.Router();
var controller = require('../controller');

router.get('/outfits', controller.getOutfits);

router.get('/outfits/:id', controller.getOneOutfit);

module.exports = router;