import path from 'path';
import express from 'express';

import arxiv_api from './arxiv_api.js';

const app = express();
const resolve = (name) => path.join(__dirname, name);
const file = (name) => (req, res) => res.sendFile(resolve(name));

// main page
app.get(['/', '/index.html'], file('client/index.html'));
// js & css
app.get('/js', file('client/main.js'));
app.use('/css', express.static(resolve('client/css')));

// arXiv API
app.get('/papers', async function (req, res) {
	if (req.query.start === undefined) {
		res.status(400).send('Please provide the start parameter');
		return;
	}

	let result = await arxiv_api(req.query.start);
	if (typeof result === 'string') {
		res.status(500).send(result);
	} else {
		res.status(200).json(result);
	}
});

app.listen(3000, () => console.log('server listening on port 3000'));
