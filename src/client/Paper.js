import $ from 'jquery';
import React from 'react';

export default class Paper extends React.Component {
	constructor(props) {
		super(props);
		console.log(this.props);
	};
	render = () => {
		return (
			<article className="paper">
				<h2 className="paper__title">
					<a href={this.props.href}>{this.props.title}</a>
				</h2>
				<p className="paper__abstract">{this.props.abstract}</p>
				<footer>
					<ul className="authors">
						{this.props.authors.map(x => <li>x</li>)}
					</ul>
				</footer>
			</article>
		);
	}
}
