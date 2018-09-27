const koaRouter=require('koa-router');
const router = new koaRouter()
const path = require('path');

const UserRouter = require('./UserRouter.js');
const TodoRouter = require('./TodoRouter.js');

router.use('/',UserRouter.routes());
router.use('/todo',TodoRouter.routes());

module.exports = router;