import http from 'http';
import path from 'path';
import { format as formatUrl } from 'url';
import Koa from 'koa';
import koaStatic from 'koa-static';
import Router from 'koa-router';

// configure server
const app = new Koa();
const server = http.createServer(app.callback());

// handle static files
app.use(koaStatic(path.resolve(__dirname, '../build')));

// configure router
const router = new Router();
router.get('/', ({ response }) => {
  response.redirect('/hello');
});
router.get('/hello', require('./routes/hello').default);
router.get('/hello-react-spa', require('./routes/hello-react-spa').default);
router.get('/hello-react-ssr', require('./routes/hello-react-ssr').default);
app.use(router.routes()).use(router.allowedMethods());

// start server
server.listen(3001);
const address = server.address();
const baseUrl = formatUrl({
  protocol: 'http',
  hostname: address.address,
  port: address.port,
});
console.log(`Server listening on ${baseUrl}`);
