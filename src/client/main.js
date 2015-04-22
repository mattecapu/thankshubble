import $ from 'jquery';
import React from 'react';
import PapersList from './PapersList.js';

$(() => {
	React.render(
		<PapersList />,
		document.getElementsByClassName('content')[0]
	);
});
