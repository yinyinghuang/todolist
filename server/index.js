const Koa=require('koa');
const static=require('koa-static');
const bodyparser=require('koa-bodyparser');
const jwtKoa=require('koa-jwt');
const cors=require('koa-cors');
const path=require('path');
const fs=require('fs');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const router=require('./routers');

const app=new Koa();
app
	.use(cors())
	.use(bodyparser())
	.use(static(path.resolve(__dirname,'build')))
	.use(jwtKoa({secret}).unless({
		path:['\/user\/login/']
	}))
	.use(router.routes())
	.use(async (ctx,next) => {
		console.log(`\n\n\n${ctx.method} ${ctx.url} ${new Date().toLocaleString()}`);
		next();
		console.log(`----------------${new Date().toLocaleString()}------------\n`,ctx.body);
	});

(async () => {
	try{
		mongoose.connect('mongodb://localhost/test',{useMongoClient:true});
	}catch (e) {
		console.log(e);
	}
	app.listen(8080);
})();