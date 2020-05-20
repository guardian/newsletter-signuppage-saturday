import "../../../linkbox-2/client/js/node_modules/ophan-tracker-js";

var urlGetter = window.parent.location;
// var linkOne = document.querySelector(".live-links__content__one");
var linkTwo = document.querySelector(".live-links__content__two");
var linkThree = document.querySelector(".live-links__content__three");
var linkFour = document.querySelector(".live-links__content__four");
var linkFive = document.querySelector(".live-links__content__five");
// linkOne.setAttribute(
//   "data-link-name",
//   "bbq linkbox: link 1 " + urlGetter
// );
linkTwo.setAttribute(
  "data-link-name",
  "bbq linkbox: link 2 " + urlGetter
);
linkThree.setAttribute(
  "data-link-name",
  "bbq linkbox: link 3 " + urlGetter
);
linkFour.setAttribute(
  "data-link-name",
  "bbq linkbox: link 4 " + urlGetter
);
linkFive.setAttribute(
  "data-link-name",
  "bbq linkbox: link 5 " + urlGetter
);