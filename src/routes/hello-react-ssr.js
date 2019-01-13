import React from 'react';
import ReactDOMServer from 'react-dom/server';
import Hello from '../components/Hello';

const template = (contents) => `
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="utf-8" />
    <title>Isomorphic rendering (SSR)</title>
  </head>

  <body>
    <div id="app">${contents}</div>
    <nav>
      <ul>
        <li><a href="/hello">Pre-render data</a></li>
        <li><a href="/hello-react-spa">Encapsulate rendering engine (SPA)</a></li>
        <li><a href="/hello-react-ssr">Isomorphic rendering (SSR)</a></li>
      </ul>
    </nav>
    <script src="./main-ssr.bundle.js"></script>
  </body>
  </html>
`;

async function handler({ request, response }) {
  const contents = ReactDOMServer.renderToString(<Hello name={request.query.v || 'Stranger'} />);
  response.status = 200;
  response.body = template(contents);
}

export default handler;
