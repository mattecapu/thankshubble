import $ from 'jquery';
import React from 'react';
import Paper from './Paper.js';

export default class PapersList extends React.Component {
	constructor() {
		super();
		this.state = {
			papers: [],
			end: true
		};
	}
	render = () => {
		return (
			<ol className="papers">
				{this.state.papers.map((paper) => <Paper {...paper} />)}
				{this.state.end ? '' : <button className="load-more" onClick={this.loadMore}>{"load more"}</button>}
			</ol>
		);
	};
	loadMore = () => {
		$.get('/papers', {start: this.state.papers.length})
		.done((papers) => {
			this.setState({
				papers: this.state.papers.concat(papers)
			});
			this.setState({
				end: papers.length < 10
			});
		})
		.fail((err) => console.error(err.responseText));
	};
	componentDidMount = this.loadMore;
}
