import express from 'express';

import { default as arxiv_api } from './arxiv_api.js';

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.get('/papers', (req, res) => arxiv_api(res));

const server = app.listen(3000, function () {

  const host = server.address().address;
  const port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});
