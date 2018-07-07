/* eslint-disable */
import express from 'express';
import bodyParser from 'body-parser';
import argv from './argv';
import port from './port';
import setup from './middlewares/setupMiddleware';
import users from './routes/users';
import future from './routes/news/future';
const resolve = require('path').resolve;

const ngrok = (isDev && process.env.ENABLE_TUNNEL) || argv.tunnel ? require('ngrok') : false;
const isDev = process.env.NODE_ENV !== 'production';

const app = express();

app.use(bodyParser.json());

app.use('/api/users', users);

app.use('/news/future', future);

setup(app, {
  outputPath: resolve(process.cwd(), 'build'),
  publicPath: '/',
});

const customHost = argv.host || process.env.HOST;
const host = customHost || null;
const prettyHost = customHost || 'localhost';

app.listen(port, host, (err) => {
  if (err) {
    return console.log(err.message);
  }

  if (ngrok) {
    ngrok.connect(port, (innerErr, url) => {
      if (innerErr) {
        console.log(innerErr);
      }

      console.log(port, prettyHost, url);
    });
  } else {
    console.log(port, prettyHost);
  }
});
