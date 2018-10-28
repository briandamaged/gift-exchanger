
const Koa = require('koa');
const Router = require('koa-router');

const serve = require('koa-static');

function create(config) {
  const app = new Koa();

  const rtr = new Router();


  rtr.get('/api', function(ctx) {
    ctx.body = "OK!";
  });

  app.use(rtr.routes());

  if(config.static.enabled) {
    app.use(serve(config.static.path));
  }

  return app;
}


module.exports = exports = create;
