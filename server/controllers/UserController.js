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
                        id: user._id
                    }, config.secret, { expiresIn: '30s' });
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
    }
};