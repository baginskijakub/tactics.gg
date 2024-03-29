import path from 'path';
import fs from 'fs';

import React from 'react';
import ReactDOMServer from 'react-dom/server';
import {StaticRouter} from "react-router-dom/server"
import express from 'express';
const compression = require('compresion')

import App from '../src/App';

const PORT = process.env.PORT || 8080;
const app = express();

app.use(compression({
  level: 6,
  threshold: 100*1000,
  filter: (req:any, res:any) => {
    if(req.headers['x-no-compression']){
      return false
    }
    return compression.filter(req, res)
  }
  
}))

app.get('/', (req, res) => {
  res.set('Cache-control', 'public, max-age=300')
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
    
    return res.send(
      data.replace('<div id="root"></div>', `<div id="root">${app}</div>`)
    );
  });
});

app.use(express.static('./build'));
app.disable('x-powered-by');

app.use(express.static(path.resolve(__dirname, '../build')));
  app.get('*', function (req, res) {
    res.sendFile(path.resolve(__dirname, '../build/index.html'));
  });

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});