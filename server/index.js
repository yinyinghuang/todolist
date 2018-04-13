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
    app = new Koa();

mongoose.Promise = global.Promise;

app
    .use(cors())
    .use(bodyparser())
    //检测token是否正确，若存在且正确，将用户信息存放在ctx.user；
    //若存在不正确，立即返回错误信息
    .use(tokenError().unless({
        path: [/^\/user\/login/]
    }))
    .use(static(path.resolve(__dirname, 'build')))
    //检验
    // .use(jwtKoa({ secret: config.secret,debug:true }).unless({
    //     path: [/^\/user\/login/]
    // }))
    .use(router.routes())
    .use(async(ctx, next) => {
        console.log(`\n\n\n${ctx.method} ${ctx.url} ${new Date().toLocaleString()}`);
        next();
        console.log(`----------------${new Date().toLocaleString()}------------\n`, ctx.body);
    });

(async() => {
    try {
        mongoose.connect('mongodb://localhost/test', { useMongoClient: true });
    } catch (e) {
        console.log(e);
    }
    app.listen(8080);
})();