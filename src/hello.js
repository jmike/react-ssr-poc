async function handler({ response }) {
  response.status = 200;
  response.body = 'Hola, GreeceJS!';
}

export default handler;
