const Koa=require('koa');
const static=require('koa-static');
const cors=require('koa-cors');
const path=require('path');
const fs=require('fs');

const router=require('./routers');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;


const app=new Koa();
app.use(cors());
app.use(static(path.resolve(__dirname,'build')));
app.use(async (ctx,next) => {
	console.log(`${ctx.method} ${ctx.url} ${new Date().toLocaleString()}`);
	next();
})

app.use(router.routes());
app.listen(8080);