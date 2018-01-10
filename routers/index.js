const router=require('koa-router')();
const path = require('path');

const UserRouter = require('./UserRouter.js');

router.use('/',UserRouter.routes());

module.exports = router;