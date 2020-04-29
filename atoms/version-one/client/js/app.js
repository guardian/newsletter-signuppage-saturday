// if you want to import a module from shared/js then you can
// just do e.g. import Scatter from "shared/js/scatter.js"

const articleOne = document.getElementById('article-1')
const articleTwo = document.getElementById('article-2')
const articleThree = document.getElementById('article-3')
const articleFour = document.getElementById('article-4')

// fetch('https://www.theguardian.com/politics/series/politics-live-with-andrew-sparrow/latest/email/headline.txt').then(res => res.text()).then(articleOne.innerHTML)

fetch('https://www.theguardian.com/world/series/coronavirus-live/latest/email/headline.txt').then(res => res.text()).then(function (headline) {
    articleOne.innerHTML = headline.split('Coronavirus live news:').join('<strong>Coronavirus live news:</strong>');
})

fetch('https://www.theguardian.com/politics/series/politics-live-with-andrew-sparrow/latest/email/headline.txt').then(res => res.text()).then(function (headline) {
    articleTwo.innerHTML = headline.split('UK coronavirus live:').join('<strong>UK coronavirus live:</strong>');
})

fetch('https://www.theguardian.com/us-news/series/us-politics-live-with-joan-e-greve/latest/email/headline.txt').then(res => res.text()).then(function (headline) {
    articleThree.innerHTML = headline.split('Coronavirus US live:').join('<strong>Coronavirus US live:</strong>');
})

fetch('https://www.theguardian.com/business/series/guardian-business-live/latest/email/headline.txt').then(res => res.text()).then(function (headline) {
    articleFour.innerHTML = headline.split('- business live').join('<strong>- business live</strong>');
})



console.log('v1.2')