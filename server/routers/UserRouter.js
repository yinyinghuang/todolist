const router=require('koa-router')();
const path = require('path');
const User = require('../controllers/UserController.js');

router.post('user/login',User.signIn);

module.exports = router;