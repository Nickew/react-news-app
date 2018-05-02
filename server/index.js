const express = require('express');

const isDev = process.env.NODE_ENV !== 'production';
const ngrok = (isDev && process.env.ENABLE_TUNNEL) || argv.tunnel ? require('ngrok') : false;
const resolve = require('path').resolve;

const app = express();

const port = 8080;
const customHost = argv.host || process.env.HOST;
const host = customHost || null;
const prettyHost = customHost || 'localhost';

app.listen(port, host, (err) => {
	if (err) {
		return logger.error(err.message);
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