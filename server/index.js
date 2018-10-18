require('./ignore.js')();
// require('babel-polyfill');
require('babel-register')({
  presets: ['env', 'react'/*, 'stage-0'*/],
  plugins: ["react-loadable/babel"/*,'syntax-dynamic-import',"dynamic-import-node"*/]
});

const Loadable = require('react-loadable')

const
    Koa = require('koa'),
    static = require('koa-static'),
    bodyparser = require('koa-bodyparser'),
    jwtKoa = require('koa-jwt'),
    cors = require('koa-cors'),
    path = require('path'),
    fs = require('fs'),
    mongoose = require('mongoose'),
    config = require('./config'),
    router = require('./routers'),
    tokenError = require('./middlewares/tokenError'),
    clientRouter = require('./middlewares/clientRouter'),
    app = new Koa();

mongoose.Promise = global.Promise;
app
    .use(cors())
    .use(bodyparser())
    .use(async(ctx, next) => {
        console.log(`\n\n\n-------before-1---${process.env.NODE_ENV}----- ${new Date().toLocaleString()}`,ctx.url);
        await next();
        // console.log(`-------before-2--dd------${new Date().toLocaleString()}------------`, ctx.body,ctx.url)
    })
    //检测token是否正确，若存在且正确，将用户信息存放在ctx.user；
    //若存在不正确，立即返回错误信息
    // .use(tokenError().unless({
    //     path: [/^\/user\/login/,/^\/user\/verify/,/^\/user\/auth/]
    // }))
    .use(static(path.resolve(__dirname, '../build')))
    .use(clientRouter)
    //检验
    // .use(jwtKoa({ secret: config.secret,debug:true }).unless({
    //     path: [/^\/user\/login/]
    // }))
    .use(router.routes())
    .use(async(ctx, next) => {
        console.log(`\n\n\n--------after--1------${ctx.body} ${ctx.url} ${new Date().toLocaleString()}`);
        await next();
        // console.log(`--------after---2-----${ctx.status}------------`, ctx.url);
    });

(async() => {
    try {
        mongoose.connect('mongodb://localhost/test', { useMongoClient: true });
    } catch (e) {
        console.log(e);
    }
    // Loadable.preloadAll().then(() => {
        app.listen(4000);
    // })
    
})();