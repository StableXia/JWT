const Koa = require('koa');
const Router = require('koa-router');
const BodyParser = require('koa-bodyparser');

const jwt = require('./jwt');
const auth = require('./auth');
const crossOrigin = require('./crossOrigin');

const app = new Koa();
const router = new Router();
const bodyparser = new BodyParser();

router.post('/api/login', async (ctx) => {
  const { username, password } = ctx.request.body;

  if (username === 'admin' && password === '111111') {
    ctx.response.body = {
      code: 200,
      success: true,
      data: {
        token: jwt.generate({
          userId: 'key-1',
        }),
      },
      message: 'login success!',
    };
    return;
  }

  ctx.response.body = {
    code: 4001,
    success: false,
    message: 'login faied!',
  };
});

router.get('/api/user/list', async (ctx) => {
  ctx.type = 'json';
  ctx.body = { code: 200, success: true, data: [] };
});

app.use(async (ctx, next) => {
  console.log('ctx >>>>>>', ctx);
  await next();
});
app.use(crossOrigin);
app.use(bodyparser);
app.use(
  auth({
    unless: {
      path: [/^\/api\/login/],
    },
  }),
);
app.use(router.routes());
app.use(crossOrigin);

app.listen(3000);
