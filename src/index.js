import Koa from 'koa';
import http from 'http';
import { format as formatUrl } from 'url';

// configure server
const app = new Koa();
const server = http.createServer(app.callback());

// start server
server.listen(3333);
const address = server.address();
const baseUrl = formatUrl({
  protocol: 'http',
  hostname: address.address,
  port: address.port,
});
console.log(`Server listening on ${baseUrl}`);
