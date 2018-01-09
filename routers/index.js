const router=require('koa-router')();
const path = require('path');

const User = require('../models/User.js');
const Todo = require('../models/Todo.js');

router.post('/api/user',async ctx =>{
	ctx.body= 'sss';
});

router.get('/api/todolist',async ctx =>{
	let todos='';
	User.find((err,doc) => {
		todos = doc;
	});
	console.log('todos',todos);
	ctx.body= todos;
});

router.get('/',async ctx => {
	ctx.body = await fs.readFileSync(path.resolve(__dirname, 'build','index.html'),'utf8');
});

module.exports = router;