const Koa=require('koa');
const static=require('koa-static');
const cors=require('koa-cors');
const router=require('koa-router')();
const path=require('path');
const fs=require('fs');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const User = require('./models/User');
const Todo = require('./models/Todo');


mongoose.connect('mongodb://localhost:27017/test',{useMongoClient:true},function(err){
	console.log(err ? err :'database connect success');
}); 

const app=new Koa();
app.use(cors());
app.use(static(path.resolve(__dirname,'build')));
app.use(async (ctx,next) => {
	console.log(`${ctx.method} ${ctx.url} ${new Date().toLocaleString()}`);
	next();
})

// let content = [];
User.find((err,doc) => {
	err ? 
	content='sssssss':
	content = doc;
})

router.get('/api/todolist',async ctx =>{
	await User.find((err,doc) => {
		err ? 
		content='sssssss':
		ctx.body = doc;
	});
	console.log(ctx.body);
	// ctx.body = content;
});

router.get('/',async ctx => {
	ctx.body = await fs.readFileSync(path.resolve(__dirname, 'build','index.html'),'utf8');
});
app.use(router.routes());
app.listen(8080);