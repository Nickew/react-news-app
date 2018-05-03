const express = require('express');

const argv = require('./argv');
const port = require('./port');
const setup = require('./middlewares/setupMiddleware');
const isDev = process.env.NODE_ENV !== 'production';
const ngrok = (isDev && process.env.ENABLE_TUNNEL) || argv.tunnel ? require('ngrok') : false;
const resolve = require('path').resolve;

const app = express();

// If you need a backend, e.g. an API, add your custom backend-specific middleware here
// app.use('/api', myApi);

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