// open and close containers
const defaultHeight = "300px";
const openedHeight = "100%";
const readLess = `<svg width="34" height="17" viewBox="0 0 34 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 15.5833L16.2237 3.10933e-07H17.7763L34 15.5833L32.4863 17L17 4.47368L1.5137 17L0 15.5833Z" fill="#ffffff"/>
</svg>Read less`;
const readMore = `<svg width="34" height="18" viewBox="0 0 34 18" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M0.0771484 1.7592L16.2271 17.9092H17.7726L33.9226 1.7592L32.4158 0.291016L16.9999 13.2728L1.58397 0.291016L0.0771484 1.7592Z" fill="#ffffff" /></svg>Read more`;

const openButtons = document.querySelectorAll(".open-button");
// for (i = 0; i < openButtons.length; i++)

for (var i = 0; i < openButtons.length; i++) {
  openButtons[i].addEventListener("click", function () {
    var openMe = this.parentNode;
    if (!this.classList.contains("open")) {
      for (var j = 0; j < openButtons.length; j++) {
        const wrapper = document.querySelectorAll(".all-reviews__sections__wrapper")
        const wrapperBtn = wrapper[j].querySelector(".open-button")
        wrapper[j].classList.remove("open")

        wrapperBtn.innerHTML = readMore;
      }
    }

    openMe.classList.toggle("open");
    this.classList.toggle("open");
    console.log(this.classList);

    if (this.classList.contains("open")) {
      this.innerHTML = readLess;
    } else {
      this.innerHTML = readMore;
      openMe.scrollIntoView();
    }
  });
}

// carousel header
import * as Swiper from "shared/js/swiper";

var rotation;
var depth;
var cenSlides;

const initialiseSwiper = function () {
  if (window.innerWidth >= 660) {
    rotation = 20;
    depth = 50;
    cenSlides = true;
  } else {
    rotation = 2;
    depth = 10;
    cenSlides = false;
  }

  var swiperOne = new Swiper(".swiper-container-one", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: cenSlides,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: rotation,
      stretch: 0,
      depth: depth,
      modifier: 1,
      slideShadows: false,
    },
    spaceBetween: 10,
    loop: true,
  });
};

initialiseSwiper();
window.addEventListener("resize", () => {
  console.log("re-sizer");
  initialiseSwiper();
});

//swiper
var slidesPerView;

const runSwiper = function () {
  if (window.innerWidth >= 660) {
    slidesPerView = 2;
    console.log("desktop");
  } else {
    slidesPerView = 1;
    console.log("mobile");
  }

  var swiperTwo = new Swiper(".swiper-container-two", {
    effect: "slide",
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 0,
      modifier: 0,
      slideShadows: false,
    },
    slidesPerView: slidesPerView,
    spaceBetween: 20,
    centeredSlides: false,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
};

runSwiper();
window.addEventListener("resize", () => {
  console.log("re-sizer");
  runSwiper();
});








// --if getting the date from an element?:
const dateElAll = document.querySelectorAll('.publication-date span');

dateElAll.forEach((dateEl) => {
  const dateString = dateEl.innerHTML;

  const date = new Date(Date.parse(dateString));

  const formattedDate = date.toLocaleString('en-GB', {
    month: 'short',
    year: 'numeric',
    weekday: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    timeZoneName: 'short'
  }).replace(/,/g, '');

  // --to place the formatted date back in element:
  dateEl.innerText = formattedDate;
})





// lazy load spotify



// document.addEventListener("scroll", function () {
//   const spotifyFrame = document.querySelectorAll(".spotify-iframe")
//   console.log(spotifyFrame)
//   const offset = spotifyFrame.getBoundingClientRect().top - (window.innerHeight * 2)
//   console.log(offset)
//   if (offset < 0) {
//     spotifyFrame.forEach(() => {
//       spotifyFrame.setAttribute("src", iframe.dataset.src)
//     })
//   }
// })