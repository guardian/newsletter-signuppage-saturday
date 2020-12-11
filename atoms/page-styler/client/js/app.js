import anime from 'animejs/lib/anime.es.js';

// if you want to import a module from shared/js then you can
// just do e.g. import Scatter from "shared/js/scatter.js"
function pullContentIntoAtom() {
	const elAll = contentElements(['p', 'h2', 'figure']);

	if (elAll.length > 0) {

		const moveTarget = document.querySelector('body > .element-atom .body-content');
		elAll.forEach((el) => {
			if (el.hasAttribute('data-canonical-url')) {
				// console.log('this is the element', el)
				const url = el.dataset.canonicalUrl;
				let iframeEl = document.createElement('iframe');
				iframeEl.setAttribute('src', url);
				// console.log(iframeEl);
				el.appendChild(iframeEl);

				setTimeout(() => {
					// console.log('hi');
				}, 2000);

			}
			moveTarget.appendChild(el);
		})
		document.body.classList.add('DOMready')
	} else {
		// console.log('DOM ready');
	}
}

pullContentIntoAtom();
let i = 0;
const contentInterval = setInterval(function () {
	pullContentIntoAtom();
	if (i++ >= 20) clearInterval(contentInterval);
}, 3000);


function contentElements(elements) {
	const selector = elements.map((el) => {
		return `body > .element-atom ~ ${el}`;
	}).join(',');
	return document.querySelectorAll(selector);
}

console.log(anime, 'anime');

var roundone = document.querySelector('.roundone');
var roundtwo = document.querySelector('.roundtwo');
var roundthree = document.querySelector('.roundthree');
var roundfour = document.querySelector('.roundfour');
var roundfive = document.querySelector('.roundfive');
var roundsix = document.querySelector('.roundsix');

anime({
  targets: roundone,
  innerHTML: [0, 525600],
  easing: 'linear',
  round: 1,
	delay: 6000,
	duration: 2000
});

anime({
  targets: roundtwo,
  innerHTML: [0, 8760],
  easing: 'linear',
  round: 1,
	delay: 5000,
	duration: 1000
});

anime({
  targets: roundthree,
  innerHTML: [0, 365],
  easing: 'linear',
  round: 1,
	delay: 4000,
	duration: 1000
});

anime({
  targets: roundfour,
  innerHTML: [0, 52],
  easing: 'linear',
  round: 1,
	delay: 3000,
	duration: 1000
});

anime({
  targets: roundfive,
  innerHTML: [0, 12],
  easing: 'linear',
  round: 1,
	delay: 2000,
	duration: 1000
});

anime({
  targets: roundsix,
  innerHTML: [0, 1],
  easing: 'linear',
  round: 1,
	delay: 1000,
	duration: 1000
});
