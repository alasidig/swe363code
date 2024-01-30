const  router = require('express').Router();

router.use('/get_vs_post', require('./forms/get_vs_post_router'))
module.exports = router