import "ophan-tracker-js";

var urlGetter = window.parent.location;
// var linkOne = document.querySelector(".live-links__content__one");
var linkTwo = document.querySelector(".live-links__content__one");
var linkThree = document.querySelector(".live-links__content__two");
var linkFour = document.querySelector(".live-links__content__three");
var linkFive = document.querySelector(".live-links__content__four");
// linkOne.setAttribute(
//   "data-link-name",
//   "bbq linkbox: link 1 " + urlGetter
// );
linkTwo.setAttribute(
  "data-link-name",
  "bbq linkbox: link 1 " + urlGetter
);
linkThree.setAttribute(
  "data-link-name",
  "bbq linkbox: link 2 " + urlGetter
);
linkFour.setAttribute(
  "data-link-name",
  "bbq linkbox: link 3 " + urlGetter
);
linkFive.setAttribute(
  "data-link-name",
  "bbq linkbox: link 4 " + urlGetter
);