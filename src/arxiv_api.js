import qs from 'querystring';
import Promise from 'bluebird';
import request from 'request';
import { parseString as xml } from 'xml2js';

xml = Promise.promisify(xml);
request = Promise.promisify(request);

export default async function (start) {
	const arxiv_query = {
		search_query: 'all:("hubble telescope")',
		start,
		max_results: 20,
		sortBy: 'lastUpdatedDate'
	}
	const arxiv_api_url = 'http://export.arxiv.org/api/query?' + qs.stringify(arxiv_query);

	try {
		// make the request and wait for the result
		let [, body] = await request(arxiv_api_url);
		// fetch the papers list
		let papers = (await xml(body)).feed.entry;

		if (papers === undefined) return [];

		// filter the info and return the new collection
		return papers.map((paper) => {
			return {
				title: paper.title,
				summary: String(paper.summary).substring(0, 400),
				authors: paper.author.map(x => x.name),
				href: paper.link[0].$.href
			}
		});
	} catch(e) {
		console.error(e);
		return 'sorry! something went wrong. try to reload the page.';
	}
}
