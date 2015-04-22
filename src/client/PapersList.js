import $ from 'jquery';
import React from 'react';
import Paper from './Paper.js';

export default class PapersList extends React.Component {
	constructor() {
		console.log('construct');
		super();
		this.state = {papers: []};
	}
	render = () => {
		console.log('render');
		return (
			<ol className="papers">
				{this.state.papers.map((paper) => {console.log(paper);return <Paper {...paper} />})}
				<button className="js-more" onClick={this.loadMore}>{"+ load more +"}</button>
			</ol>
		);
	};
	loadMore = () => {
		$.get('/papers', {start: this.state.papers.length})
		.done((papers) => {
			console.log(papers);
			this.setState({
				papers: this.state.papers.concat(papers)
			});
		})
		.fail((err) => console.error(err));
	};
	componentDidMount = () => {
		console.log('didmount');
		this.loadMore();
	};
}
