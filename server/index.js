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
    app = new Koa();

mongoose.Promise = global.Promise;

app
    .use(cors())
    .use(bodyparser())
    .use(static(path.resolve(__dirname, 'build')))
    //检验
    .use(jwtKoa({ secret: config.secret }).unless({
        path: [/^\/user\/login/]
    }))
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