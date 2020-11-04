// if you want to import a module from shared/js then you can
// just do e.g. import Scatter from "shared/js/scatter.js"

var slides = document.querySelectorAll('.slide');
var controls = document.querySelector('.controls');
var right = document.querySelector('.right');
var left = document.querySelector('.left');


function initSlider(){
  var image = slides[0].querySelector('.slide-image');
  var imageTwo = slides[1].querySelector('.slide-image');
  var imageSrc = image.dataset.src;
  var imageSrcTwo = imageTwo.dataset.src;
  var dots = document.querySelectorAll('.dots');

  dots[0].classList.add('on');
  image.setAttribute('src', imageSrc);
  imageTwo.setAttribute('src', imageSrcTwo);
  slides[0].classList.add('display');
}

right.addEventListener('click', function(){
  var current = document.querySelector('.slide.display');
  var next = document.querySelector('.display + .slide');
  var nextTwo = document.querySelector('.display + .slide + .slide');
  var currentDot = document.querySelector('.dots.on');
  var nextDot = document.querySelector('.on + .dots');
  var dots = document.querySelectorAll('.dots');

  current.classList.remove('display');
  currentDot.classList.remove('on');
  if(next && next != undefined) {
    next.classList.add('display');
    nextDot.classList.add('on');
    if(nextTwo && nextTwo != 'undefined') {
      var image = nextTwo.querySelector('.slide-image');
      var imageSrc = image.dataset.src;
      image.setAttribute('src', imageSrc);
    }
  }else {
    dots[0].classList.add('on');
    slides[0].classList.add('display');
  }
});

left.addEventListener('click', function(){
  var current = document.querySelector('.slide.display');
  var previous = current.previousElementSibling;
  var currentDot = document.querySelector('.dots.on');
  var previousDot = currentDot.previousElementSibling;
  var dots = document.querySelectorAll('.dots');

  current.classList.remove('display');
  currentDot.classList.remove('on');
  if(previous && previous != undefined) {
    previous.classList.add('display');
    previousDot.classList.add('on');
  }else {
    dots[0].classList.add('on');
    slides[0].classList.add('display');
  }
});

document.onkeydown = checkKey;
function checkKey(e) {
  e = e || window.event;
  if (e.keyCode == '37') {
    e.preventDefault();
    var current = document.querySelector('.slide.display');
    var previous = current.previousElementSibling;
    var currentDot = document.querySelector('.dots.on');
    var previousDot = currentDot.previousElementSibling;
    var dots = document.querySelectorAll('.dots');
    current.classList.remove('display');
    currentDot.classList.remove('on');
    if(previous && previous != undefined) {
      previous.classList.add('display');
      previousDot.classList.add('on');
    }else {
      dots[0].classList.add('on');
      slides[0].classList.add('display');
    }
  }
  else if (e.keyCode == '39') {
    e.preventDefault();
    var current = document.querySelector('.slide.display');
    var next = document.querySelector('.display + .slide');
    var nextTwo = document.querySelector('.display + .slide + .slide');
    var currentDot = document.querySelector('.dots.on');
    var nextDot = document.querySelector('.on + .dots');
    var dots = document.querySelectorAll('.dots');
    current.classList.remove('display');
    currentDot.classList.remove('on');
    if(next && next != undefined) {
      next.classList.add('display');
      nextDot.classList.add('on');
      if(nextTwo && nextTwo != 'undefined') {
        var image = nextTwo.querySelector('.slide-image');
        var imageSrc = image.dataset.src;
        image.setAttribute('src', imageSrc);
      }
    }else {
      dots[0].classList.add('on');
      slides[0].classList.add('display');
    }
  }
}

function initTimeline(){
  var placeholder = document.querySelector('.timeline-placeholder');
  var dots = [];
  for(var i = 0; i<slides.length; i++) {
    dots.push('<div data-index="'+[i]+'" class="dots"></div>');
  }
  return dots;
}

function initDots() {
  var dotString = initTimeline();
  var timelineProto = document.querySelector('.timeline-placeholder');
  timelineProto.innerHTML = dotString.join('');
}

function initTimelineClickable(){
  console.log('init dots')
  var dots = document.querySelectorAll('.dots');
  console.log(dots);
  for(var i=0; i < dots.length; i++){
    console.log(dots);
    dots[i].addEventListener('click', function(){
      var index = this.dataset.index;
      console.log(slides[index]);
      var dots = document.querySelectorAll('.dots');
      for(var j=0; j < slides.length; j++) {
        slides[j].classList.remove('display');
        dots[j].classList.remove('on');
        dots[index].classList.add('on');
        slides[index].classList.add('display');
      }
      var next = document.querySelector('.display + .slide');
      var nextTwo = document.querySelector('.display + .slide + .slide');
      var imageClicked = slides[index].querySelector('.slide-image');
      var imageClickedSrc = imageClicked.dataset.src;
      imageClicked.setAttribute('src', imageClickedSrc);

      if(next && next != 'undefined') {
        var image = next.querySelector('.slide-image');
        var imageSrc = image.dataset.src;
        image.setAttribute('src', imageSrc);
      }
      if(nextTwo && nextTwo != 'undefined') {
        var image = nextTwo.querySelector('.slide-image');
        var imageSrc = image.dataset.src;
        image.setAttribute('src', imageSrc);
      }
    });
  }
}

function viewPortHeight() {
  var isIos = document.querySelector('.ios');
  var isAndroid = document.querySelector('.android');
  if(!isIos || !isAndroid) {
    let vh = window.innerHeight * 0.01;
    var slideHeight = document.querySelectorAll('.slide');
    var carouselHeight = document.querySelector('.election-image-carousel');
    carouselHeight.style.setProperty('--vh', `${vh}px`);
    for(var i=0; i < slideHeight.length; i++) {
      slideHeight[i].style.setProperty('--vh', `${vh}px`);
    }
    console.log('viewport', vh);
  }
}

function initVideo() {
  var video = document.querySelector('.video-slide');
  if(video){
    video.addEventListener('loadeddata', function() {
      console.log('video is ready');
      video.play();
    }, false);
  }else {
    console.log('no video');
  }
}

function initCaptions() {
  var captions = document.querySelectorAll('.caption');
  for(var i =0; i< captions.length; i++) {
    captions[i].addEventListener('click', function(){
      this.classList.toggle('display');
    });
  }
}

function init(){
  initVideo();
  initDots();
  initSlider();
  initTimeline();
  initTimelineClickable();
  initCaptions();
} init();
