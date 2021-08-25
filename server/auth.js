const jwt = require('./jwt');

module.exports = function auth(ctx, next) {
  const { token = '' } = ctx.request.header;
  const tk = token.replace('Bearer ', '');

  try {
    const user = jwt.verify(tk, secret);
    ctx.state.user = user;
  } catch (e) {
    ctx.throw(401, '没有权限');
  }

  await next();
};
