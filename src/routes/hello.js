const template = (name) => `
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="utf-8" />
    <title>Pre-render data</title>
  </head>

  <body>
    <h1>Hello, ${name}!</h1>
    <nav>
      <ul>
        <li><a href="/hello">Pre-render data</a></li>
        <li><a href="/hello-react-spa">Encapsulate rendering engine (SPA)</a></li>
        <li><a href="/hello-react-ssr">Isomorphic rendering (SSR)</a></li>
      </ul>
    </nav>
  </body>
  </html>
`;

async function handler({ request, response }) {
  response.status = 200;
  response.body = template(request.query.v || 'Stranger');
}

export default handler;
