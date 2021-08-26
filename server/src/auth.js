const jwt = require('./jwt');

function matchesPath(originalUrl, path) {
  const paths = path ? (Array.isArray(path) ? path : [opts.path]) : [];

  return paths.some((p) => {
    return (
      (typeof p === 'string' && p === originalUrl) ||
      (p instanceof RegExp && !!p.exec(originalUrl))
    );
  });
}

module.exports = (opts) => {
  return async (ctx, next) => {
    const { originalUrl } = ctx;

    if (matchesPath(originalUrl, opts.unless.path)) {
      await next();
      return;
    }

    const { authorization = '' } = ctx.request.header;
    const token = authorization.replace('Bearer Bearer ', '');
    const decoded = jwt.verify(token);

    if (!decoded || decoded.userId !== 'key-1') {
      ctx.throw(
        401,
        JSON.stringify({
          code: 401,
        }),
      );
    }

    await next();
  };
};
