console.log("working");
console.log("v1.16");

import "ophan-tracker-js";
// fixes amp issue
// import template from "../../server/templates/main.html";
// import template from "raw-loader!./../templates/main.html";




function ampCheck() {
  var amp = window.parent.AMP;
  cosole.log(amp);
  setTimout(function () {
    console.log(amp, 'timeout');
  }, 1000)
}
ampCheck();

// if (window.parent.AMP) {
//   console.log("we're amp")
//   document.getElementById('livelinks').style.display = 'none'

// } else {
//   console.log("we're wwww")
//   document.getElementById('livelinks').style.display = 'block'
// }

// window.parent.documentElement.hasAttribute('amp-version')



// fetch("http://mockbin.com/request?foo=bar&foo=baz").then(console.log);

// update headlines
const articleOne = document.getElementById("article-1");
const articleTwo = document.getElementById("article-2");
const articleThree = document.getElementById("article-3");
const articleFour = document.getElementById("article-4");

// fetch('https://www.theguardian.com/politics/series/politics-live-with-andrew-sparrow/latest/email/headline.txt').then(res => res.text()).then(articleOne.innerHTML)

fetch(
    "https://www.theguardian.com/world/series/coronavirus-live/latest/email/headline.txt"
  )
  .then((res) => res.text())
  .then(function (headline) {
    articleOne.innerHTML = headline
      .split("Coronavirus live news:")
      .join("<strong>Coronavirus live news:</strong>");
  });

fetch(
    "https://www.theguardian.com/politics/series/politics-live-with-andrew-sparrow/latest/email/headline.txt"
  )
  .then((res) => res.text())
  .then(function (headline) {
    articleTwo.innerHTML = headline
      .split("UK coronavirus live:")
      .join("<strong>UK coronavirus live:</strong>");
  });

fetch(
    "https://www.theguardian.com/us-news/series/us-politics-live-with-joan-e-greve/latest/email/headline.txt"
  )
  .then((res) => res.text())
  .then(function (headline) {
    articleThree.innerHTML = headline
      .split("Coronavirus US live:")
      .join("<strong>Coronavirus US live:</strong>");
  });

fetch(
    "https://www.theguardian.com/business/series/guardian-business-live/latest/email/headline.txt"
  )
  .then((res) => res.text())
  .then(function (headline) {
    articleFour.innerHTML = headline
      .split("- business live")
      .join("<strong>- business live</strong>");
  });



console.log("THE END");