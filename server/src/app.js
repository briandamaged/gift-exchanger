
const Koa = require('koa');
const Router = require('koa-router');

const serve = require('koa-static');

function create() {
  const app = new Koa();

  const rtr = new Router();


  rtr.get('/', function(ctx) {
    ctx.body = "OK!";
  });

  app.use(rtr.routes());

  return app;
}


module.exports = exports = create;
