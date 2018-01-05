const Koa=require('koa');
const static=require('koa-static');
const cors=require('koa-cors');
const router=require('koa-router')();
const path=require('path');
const fs=require('fs');

const app=new Koa();
app.use(cors());
app.use(static(path.resolve(__dirname,'build')));
app.use(async (ctx,next) => {
	console.log(`${ctx.method} ${ctx.url}`);
	next();
})

router.get('/api/todolist',async ctx =>{
	ctx.body= require('./data.js');
});
router.get('/',async ctx => {
	ctx.body = await fs.readFileSync(path.resolve(__dirname, 'build','index.html'),'utf8');
});
app.use(router.routes());
app.listen(8080);