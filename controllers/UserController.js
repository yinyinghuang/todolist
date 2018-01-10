const User = require('../models/User');

module.exports = {
  async signIn(ctx, next) {
    let result = {
      success: false,
      message: '用户不存在'
    };
    //从请求体中获得参数
    const { username, password } = ctx.request.body;
    //检查数据库中是否存在该用户名
    await User.findOne({
      username
    }, (err, user) => {
      if (err) {
        throw err;
      }
      if (!user) {
        ctx.body = result;
      } else {
        //判断密码是否正确
        if (password === user.password) {
            ctx.body = { success: true, message: '登入成功' }
        } else {
            ctx.body = { success: false, message: '密码错误' }
        }
      }
    });
    next();
  }
};