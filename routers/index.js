const router=require('koa-router')();
const path = require('path');

const User = require('../controllers/UserController.js');
const Todo = require('../controllers/TodoController.js');


router.post('/user',User.signIn);

router.get('/api/todolist',async ctx =>{
	
	ctx.body= '';
});

module.exports = router;