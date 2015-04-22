import jquery as $ from 'jquery';

const $container = $('.papers');

let app_state = {
	papers: []
}
let load_trig = () => morePapers(app_state.papers.length);

function render() {
	$container.html(
		app_state.papers.map((paper) => {
			return
				'<article class="paper">' +
					'<h2 class="paper__title">' + paper.title + '</h2>' +
					'<p class="paper__abstract">' + paper.abstract + '</p>' +
				'</article>';
		}).join("\n") +
		'<button class="js-more">load more</button>'
	);
	$('.js-more').click(load_trig);
}

function morePapers(loaded_papers) {
	$.get('/papers', {start: loaded_papers})
	.done((papers) => {
		app_state.papers.push(...papers);
		render();
	})
	.fail((err) => console.error(err));
}

$(load_trig);
