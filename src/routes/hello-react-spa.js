async function handler({ response }) {
  response.status = 200;
  response.body = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8" />
      <title>Encapsulate rendering engine (SPA)</title>
    </head>

    <body>
      <div id="app"></div>
      <nav>
        <ul>
          <li><a href="/hello">Pre-render data</a></li>
          <li><a href="/hello-react-spa">Encapsulate rendering engine (SPA)</a></li>
          <li><a href="/hello-react-ssr">Isomorphic rendering (SSR)</a></li>
        </ul>
      </nav>
      <script src="./main.bundle.js"></script>
    </body>
    </html>
  `;
}

export default handler;
