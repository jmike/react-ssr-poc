import http from 'http';
import { format as formatUrl } from 'url';
import Koa from 'koa';
import Router from 'koa-router';
import helloHandler from './hello';

// configure server
const app = new Koa();
const server = http.createServer(app.callback());

// configure router
const router = new Router();
router.get('/', helloHandler);
app.use(router.routes()).use(router.allowedMethods());

// start server
server.listen(3333);
const address = server.address();
const baseUrl = formatUrl({
  protocol: 'http',
  hostname: address.address,
  port: address.port,
});
console.log(`Server listening on ${baseUrl}`);
