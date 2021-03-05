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



// // get json from page
// function findJson() {
//   const pAll = document.querySelectorAll('p');
//   console.log(pAll)
//   let jsonUrl
//   pAll.forEach((p) => {
//     if (p.innerText.indexOf('interactive.guim.co.uk/docsdata')>=0) {
//       jsonUrl = p.innerText.trim();
//       // p.remove();
//       console.log(jsonUrl)
//     }
//   })
//   return jsonUrl;
// }
// const jsonUrlTest = findJson()


// // add content
// import xr from "xr";
// import blocksTemplate from "../../server/templates/main.html!text";
// import Mustache from "mustache";

// var el = document.createElement("script");
// el.src = "<%= path %>/app.js";
// document.body.appendChild(el);

// xr.get(jsonUrlTest.then((resp) => {
//   var sheets = resp.data.sheets;
//   var html = Mustache.render(blocksTemplate, sheets);

//   return html;
// }))