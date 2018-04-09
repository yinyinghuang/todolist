const User = require('../models/User');

module.exports = {
    async signIn(ctx, next) {
        let result = {
            success: false,
            msg: '用户不存在'
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
            } else {console.log(user.password);
                //判断密码是否正确
                if (password === user.password) {
                    ctx.body = { success: true, msg: '登入成功', user: { username, password, _id: user._id } }
                } else {
                    ctx.body = { success: false, msg: '密码错误' }
                }
            }
        });
        next();
    }
};

