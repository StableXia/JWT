const Koa = require('koa');
const Router = require('koa-router');
const BodyParser = require('koa-bodyparser');

const auth = require('./auth');

const app = new Koa();
const router = new Router();
const bodyparser = new BodyParser();

router.post('/login', async (ctx) => {
  console.log(111, ctx);
  ctx.type = 'html';
  ctx.body = '<h1>hello world!</h1>';
});

router.get('/', async (ctx) => {
  ctx.type = 'html';
  ctx.body = '<h1>hello world!</h1>';
});

app.use(bodyparser);
// app.use(auth);
app.use(router.routes());

app.listen(3000);
