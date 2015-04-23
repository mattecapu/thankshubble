import $ from 'jquery';
import React from 'react';

export default class Paper extends React.Component {
	render = () => {
		return (
			<article className="paper">
				<h2 className="paper__title">
					<a href={this.props.href} target="_blank">{this.props.title}</a>
				</h2>
				<p className="paper__abstract">{this.props.abstract}</p>
				<footer>
					<ul className="authors">
						{this.props.authors.map(x => <li>{x}</li>)}
					</ul>
				</footer>
			</article>
		);
	}
}
