const jwt = require('jsonwebtoken');
const unless = require('koa-unless');
const config = require('../config');

module.exports = function() {
    const middleware = async function(ctx, next) {

        const token = ctx.header.authorization;
        if (token) {
            try {
                const payload = await jwt.verify(token.split(' ')[1], config.secret);
                ctx.user = {
                    username: payload.username,
                    _id: payload._id
                }

                await next();
            } catch (err) {
                let res = { success: false, msg: {} },
                    msg = {};
                switch (err.name) {
                    case 'JsonWebTokenError':
                        msg.header = 'token格式错误，请重新登录';
                        msg.redirect_url = config.login_url;
                        break;
                    case 'NotBeforeError':
                        msg.header = 'token生效时间：' + err.date + '请稍后重试';
                        msg.redirect_url = ctx.url;
                        break;
                    case 'TokenExpiredError':
                        msg.header = 'token已过期，请重新登录';
                        msg.redirect_url = config.login_url;
                        break;
                }
                res.msg = msg;
                ctx.body = res;

            }
        } else {
            ctx.body = {
                success: false,
                msg: { header: '请先登录' }
            }
        }
    }
    middleware.unless = unless;
    return middleware;
}