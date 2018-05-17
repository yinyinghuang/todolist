const router=require('koa-router')();
const path = require('path');
const User = require('../controllers/UserController.js');

router.post('user/login',User.signIn);
router.post('user/verify',User.verify);

module.exports = router;