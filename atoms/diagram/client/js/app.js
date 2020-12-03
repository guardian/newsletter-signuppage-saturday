// if you want to import a module from shared/js then you can
// just do e.g. import Scatter from "shared/js/scatter.js"

const el = document.querySelector('figure[data-canonical-url]');
const url = el.dataset.canonicalUrl;
let iframeEl = document.createElement('iframe');
iframeEl.setAttribute('src', url);
// console.log(iframeEl);
el.appendChild(iframeEl);
