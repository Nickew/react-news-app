/* eslint-disable */
import axios from 'axios';
import express from 'express';
import bodyParser from 'body-parser';
import fetch from 'node-fetch';
import argv from './argv';
import port from './port';
import setup from './middlewares/setupMiddleware';
import users from './routes/users';
const resolve = require('path').resolve;

const ngrok = (isDev && process.env.ENABLE_TUNNEL) || argv.tunnel ? require('ngrok') : false;
const isDev = process.env.NODE_ENV !== 'production';

const app = express();

let futureStories = [];
let full;
app.use(bodyParser.json());

app.use('/api/users', users);
// TODO: make array of objects, which contain title and link to item.
app.use('/news/future', (req, res) => {
  fetch('http://bbc.com/future/')
    .then((response) => {
      return response.text();
    })
    .then((data) => {
      const regex = /(a href="\/future\/story)+([a-zA-Z0-9/-]+)/g;
      const dataArray = data.match(regex);
      const dataLength = dataArray.length;
      // TODO: find and parse title by link
      for (let i = 0; i < dataLength; i++) {
        if (/(a href=)+/g.exec(dataArray[i])) {
          futureStories.push(/(\/future)+([a-zA-Z0-9/-]+)/.exec(dataArray[i])[0]);
        }
      }

      res.send(futureStories);
    })
    .catch((error) => {
      res.send(error);
      console.log(error);
    });

    
});

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
