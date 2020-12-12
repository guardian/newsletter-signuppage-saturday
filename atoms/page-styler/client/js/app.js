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
	delay: 5500,
	duration: 2000
});

anime({
  targets: roundtwo,
  innerHTML: [0, 8760],
  easing: 'linear',
  round: 1,
	delay: 4500,
	duration: 1000
});

anime({
  targets: roundthree,
  innerHTML: [0, 365],
  easing: 'linear',
  round: 1,
	delay: 3500,
	duration: 1000
});

anime({
  targets: roundfour,
  innerHTML: [0, 52],
  easing: 'linear',
  round: 1,
	delay: 2500,
	duration: 1000
});

anime({
  targets: roundfive,
  innerHTML: [0, 12],
  easing: 'linear',
  round: 1,
	delay: 1500,
	duration: 1000
});

anime({
  targets: roundsix,
  innerHTML: [0, 1],
  easing: 'linear',
  round: 1,
	delay: 500,
	duration: 1000
});

function insertAfter(newNode, referenceNode) {
	referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

function dateandtime(){
	var bodyContent = document.querySelector('.body-content');
	var headers = bodyContent.querySelectorAll('h2');

	console.log(headers.length);

	for(i=0; i < headers.length; i++) {
		console.log('counting', headers[i].innerHTML);
		var newel = document.createElement('div');
		newel.setAttribute('class', 'timecounter');

		//check inner content of the h2
		if(headers[i].innerHTML.includes("31 December 2019")){
			var minutes = '<span>' + 1440 + ' minutes' + '</span>';
			var hours = '<span>' + 24 + ' hours' + '</span>';
			var days = '<span>' + 1 + ' day' + '</span>';
			newel.innerHTML = minutes + hours + days;
		}else if(headers[i].innerHTML.includes("20 January 2020")){
			var minutes = '<span>' + 30+','+240 + ' minutes' + '</span>';
			var hours = '<span>' + 504 + ' hours' + '</span>';
			var days = '<span>' + 21 + ' days' + '</span>';
			newel.innerHTML = minutes + hours + days;
		}else if(headers[i].innerHTML.includes("15 February 2020")){
			var minutes = '<span>' + 68+','+680 + ' minutes' + '</span>';
			var hours = '<span>' + 1128 + ' hours' + '</span>';
			var days = '<span>' + 47 + ' days' + '</span>';
			newel.innerHTML = minutes + hours + days;
		}else if(headers[i].innerHTML.includes("9 March 2020")){
			var minutes = '<span>' + 100+','+800 + ' minutes' + '</span>';
			var hours = '<span>' + 1680 + ' hours' + '</span>';
			var days = '<span>' + 70 + ' days' + '</span>';
			newel.innerHTML = minutes + hours + days;
		}else if(headers[i].innerHTML.includes("16 March")){
			var minutes = '<span>' + 110+','+880 + ' minutes' + '</span>';
			var hours = '<span>' + 1848 + ' hours' + '</span>';
			var days = '<span>' + 77 + ' days' + '</span>';
			newel.innerHTML = minutes + hours + days;
		}else if(headers[i].innerHTML.includes("7 April 2020")){
			var minutes = '<span>' + 142+','+560 + ' minutes' + '</span>';
			var hours = '<span>' + 2376 + ' hours' + '</span>';
			var days = '<span>' + 99 + ' days' + '</span>';
			newel.innerHTML = minutes + hours + days;
		}else if(headers[i].innerHTML.includes("26 June 2020")){
			var minutes = '<span>' + 257+','+760 + ' minutes' + '</span>';
			var hours = '<span>' + 4296 + ' hours' + '</span>';
			var days = '<span>' + 179 + ' days' + '</span>';
			newel.innerHTML = minutes + hours + days;
		}else if(headers[i].innerHTML.includes("16 July 2020")){
			var minutes = '<span>' + 286+','+560 + ' minutes' + '</span>';
			var hours = '<span>' + 4776 + ' hours' + '</span>';
			var days = '<span>' + 199 + ' days' + '</span>';
			newel.innerHTML = minutes + hours + days;
		}else if(headers[i].innerHTML.includes("2 August 2020")){
			var minutes = '<span>' + 311+','+'040' + ' minutes' + '</span>';
			var hours = '<span>' + 5184 + ' hours' + '</span>';
			var days = '<span>' + 216 + ' days' + '</span>';
			newel.innerHTML = minutes + hours + days;
		}else if(headers[i].innerHTML.includes("22 September 2020")){
			var minutes = '<span>' + 384+','+480 + ' minutes' + '</span>';
			var hours = '<span>' + 6408 + ' hours' + '</span>';
			var days = '<span>' + 267 + ' days' + '</span>';
			newel.innerHTML = minutes + hours + days;
		}else if(headers[i].innerHTML.includes("2 October 2020")){
			var minutes = '<span>' + 398+','+800 + ' minutes' + '</span>';
			var hours = '<span>' + 6648 + ' hours' + '</span>';
			var days = '<span>' + 277 + ' days' + '</span>';
			newel.innerHTML = minutes + hours + days;
		}else if(headers[i].innerHTML.includes("9 November 2020")){
			var minutes = '<span>' + 453+','+600 + ' minutes' + '</span>';
			var hours = '<span>' + 7560 + ' hours' + '</span>';
			var days = '<span>' + 315 + ' days' + '</span>';
			newel.innerHTML = minutes + hours + days;
		}else if(headers[i].innerHTML.includes("23 November")){
			var minutes = '<span>' + 472+','+320 + ' minutes' + '</span>';
			var hours = '<span>' + 7872 + ' hours' + '</span>';
			var days = '<span>' + 328 + ' days' + '</span>';
			newel.innerHTML = minutes + hours + days;
		} else {
			newel.innerHTML = "Working out the time";
		}

		insertAfter(newel , headers[i]);
	}
}

setTimeout(function(){
	console.log('waited');
	dateandtime();
}, 3000);
