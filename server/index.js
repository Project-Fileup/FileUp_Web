const path = require('path');

require('dotenv').config({
  path: path.join(__dirname, '../.env.production'),
});

const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';

const url = new URL(process.env.NEXT_PUBLIC_URL);

const { hostname } = url;

const port = url.port || 5100;

const nextApp = next({ dev, hostname, port });

const handle = nextApp.getRequestHandler();

nextApp.prepare().then(() => {
  const server = express();

  let isNextAppGoingToBeClose = false;
  server.use((req, res, next) => {
    if (isNextAppGoingToBeClose) {
      res.set('Connection', 'close');
    }

    next();
  });

  server.all('*', (req, res) => {
    return handle(req, res);
  });

  const listeningServer = server.listen(port, (err) => {
    if (err) {
      throw err;
    }

    console.log(`서버켜짐 port : ${port} state : ${process.env.NODE_ENV}`);

    if (process.send) {
      process.send('ready');
      console.log(`sent to pm2 with ready message at ${new Date()}`);
    }
  });

  process.on('SIGINT', () => {
    console.log('앱이 곧 종료됩니다. received signit signal');

    isNextAppGoingToBeClose = true;

    listeningServer.close((err) => {
      console.log('server closed');
      process.exit(err ? 1 : 0);
    });
  });
});