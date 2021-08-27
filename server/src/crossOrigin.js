module.exports = async (ctx, next) => {
  ctx.set('Access-Control-Allow-Origin', ctx.get('Origin') || '*');

  if (ctx.method === 'OPTIONS') {
    ctx.set('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
    ctx.set(
      'Access-Control-Allow-Headers',
      'Content-type,Authorization,Accept',
    );

    ctx.status = 200;
  } else {
    await next();
  }
};
