var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next){
    res.send('Ola, cliente');
});

module.exports = router;