var el = document.createElement('script');
el.src = '<%= atomPath %>/app.js';
document.body.appendChild(el);



setTimeout(() => {
  if (window.resize) {  
    const html = document.querySelector('html')
    const body = document.querySelector('body')
  
    html.style.overflow = 'hidden'
    html.style.margin = '0px'
    html.style.padding = '0px'
  
    body.style.overflow = 'hidden'
    body.style.margin = '0px'
    body.style.padding = '0px'
  
  window.resize()
  }
},100)



// function findJson() {
//   const pAll = document.querySelectorAll('p');
//   pAll.forEach((p) => {
//     if (p.innerText.indexOf('interactive.guim.co.uk/docsdata')>=0) {
//       const jsonUrl = p.innerText.trim();
//       p.remove();
//       return jsonUrl;
//     }
//   })  
// }
// // findJson()
// console.log(findJson())



// import xr from "xr";
// import blocksTemplate from "../templates/blocks.html";
// import Mustache from "mustache";

// var el = document.createElement("script");
// el.src = "<%= path %>/app.js";
// document.body.appendChild(el);

// xr.get(
//   "https://interactive.guim.co.uk/docsdata-test/1D5AqIM0mJn-7rYtbKjV7McltGI2Z8VZZ0yATACN8L08.json"
// ).then((resp) => {
//   var sheets = resp.data.sheets;
//   var html = Mustache.render(blocksTemplate, sheets);

//   return html;
// });
// var el = document.createElement("script");
// el.src = "<%= path %>/app.js";
// document.body.appendChild(el);

// xr.get(jsonUrl).then((resp) => {
//   var sheets = resp.data.sheets;
//   var html = Mustache.render(blocksTemplate, sheets);

//   return html;
// });