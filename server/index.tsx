import path from 'path';
import fs from 'fs';

import React from 'react';
import ReactDOMServer from 'react-dom/server';
import {StaticRouter} from "react-router-dom/server"
import express from 'express';

import App from '../src/App';

const PORT = process.env.PORT || 4008;
const app = express();

app.get('/', (req, res) => {
  console.log(req.url)
  const app = ReactDOMServer.renderToString(
    <StaticRouter location={req.url}>
      <App />
    </StaticRouter>
  );
  const indexFile = path.resolve('./build/index.html');

  fs.readFile(indexFile, 'utf8', (err, data) => {
    if (err) {
      console.error('Something went wrong:', err);
      return res.status(500).send('Oops, better luck next time!');
    }
    // console.log(req.path)
    res.set('location', `https://www.tactix.gg${req.path}`);
    res.status(301).send()
    return res.send(
      data.replace('<div id="root"></div>', `<div id="root">${app}</div>`)
    );
  });
});

app.use(express.static('./build'));
app.disable('x-powered-by');

app.use(express.static(path.resolve(__dirname, '../dist')));
  app.get('*', function (req, res) {
    res.sendFile(path.resolve(__dirname, '../dist/index.html'));
    // res.end();
  });

// app.use(
//   cors({
//     origin: ["https://tactixgg-server.herokuapp.com"],
//   })
// );

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});