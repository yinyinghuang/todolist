const
    jwt = require('jsonwebtoken'),
    User = require('../models/User'),
    config = require('../config');


module.exports = {
    async signIn(ctx, next) {
        let result = {
            success: false,
            msg: {
                error: true,
                header: '用户不存在'
            }
        };
        //从请求体中获得参数``
        const { username, password } = ctx.request.body;
        //检查数据库中是否存在该用户名
        await User.findOne({
            username
        }, (err, user) => {
            if (err) {
                ctx.body = { success: false, msg: err }
            }
            if (!user) {
                ctx.body = result;
            } else {
                console.log(user.password);
                //判断密码是否正确
                if (password === user.password) {
                    const token = jwt.sign({
                        username: username,
                        _id: user._id
                    }, config.secret, { expiresIn: 60*60*24 });
                    ctx.body = {
                        success: true,
                        msg: {
                            header: '登录成功'
                        },
                        user: { username, password, _id: user._id },
                        token
                    }
                } else {
                    ctx.body = {
                        success: false,
                        msg: {
                            header: '密码错误'
                        }
                    }
                }
            }
        });
        next();
    },
    async verify(ctx, next) {
        const token = ctx.header.authorization;
        if (token) {
            try {
                const payload = await jwt.verify(token.split(' ')[1], config.secret);
                ctx.body = {
                    success:true,
                    user:{
                        username: payload.username,
                        _id: payload._id
                    }
                }
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
        next();
    }
};