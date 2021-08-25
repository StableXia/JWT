const Koa = require('koa');
const Router = require('koa-router');
const auth = require('./auth');

const app = new Koa();
const router = new Router();

router.get('/', async (ctx) => {
  ctx.type = 'html';
  ctx.body = '<h1>hello world!</h1>';
});

app.use(router.routes());

app.listen(3000);
