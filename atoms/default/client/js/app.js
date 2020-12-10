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