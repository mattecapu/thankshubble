import { qs as querystring } from 'querystring';
import request from 'request';
import { parseString as xml } from 'xml2js';

const arxiv_query = {
	search_query: 'all:("hubble telescope")',
	start: 0,
	max_results: 50,
	sortBy: 'lastUpdatedDate'
}
const arxiv_api_url = 'http://export.arxiv.org/api/query?' + qs.stringify(arxiv_query);

export default function (res) {
	request(arxiv_api_url, (err, response, body) => {
		if (err) res.send('sorry! something went wrong. try to reload the page.');
		//const data = await xml(body);
		res.send(body);
	});
}
