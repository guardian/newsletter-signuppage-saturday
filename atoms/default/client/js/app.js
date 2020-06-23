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
import Swiper from "swiper";
var swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
        rotate: 20,
        stretch: 0,
        // depth: 50,
        depth: 50,
        modifier: 1,
        slideShadows: false,
    },
    slidesPerView: 5,
    // spaceBetween: 20,
    spaceBetween: 10,
    loop: true,
    // clickable: true,
});


// restyle spotify
const spotifyPlayer = document.querySelector(".all-reviews__sections__song");
const spotifyBackground = spotifyPlayer.contentWindow.document.querySelector(
    ".at"
);
spotifyBackground.style.backgroundColor = "#121212";




// header animation
// const allCovers = document.querySelector(".all-reviews__header__covers");
// const albumCovers = document.querySelectorAll(
//     ".all-reviews__header__covers__image"
// );
// let currentCover = 0;
// let z = 1;

// // move covers on load
// allCovers.addEventListener("load", loadMove());

// function loadMove() {
//     albumCovers.forEach((cover) => {
//         const x = 50 * Math.random() - 25;
//         const r = 10 * Math.random() - 5;
//         const y = 50 * Math.random() - 25;
//         cover.style.transform = `translate(${x}px, ${y}px) rotate(${r}deg)`;
//     });
// }

// allCovers.addEventListener("mouseover", function () {
//     albumCovers.forEach((cover) => {
//         const x = 50 * Math.random() - 25;
//         const r = 10 * Math.random() - 5;
//         const y = 50 * Math.random() - 25;
//         cover.style.transform = `translate(${x}px, ${y}px) rotate(${r}deg)`;
//     });
// });

// allCovers.addEventListener("mouseout", function () {
//     albumCovers.forEach((cover) => {
//         const x = 50 * Math.random() - 25;
//         const r = 10 * Math.random() - 5;
//         const y = 50 * Math.random() - 25;
//         cover.style.transform = `translate(${x}px, ${y}px) rotate(${r}deg)`;
//     });
// });

// // move covers to top on click
// allCovers.addEventListener("click", function () {
//   currentCover = currentCover + 1;
//   if (currentCover > albumCovers.length - 1) {
//     currentCover = 0;
//   }
//   z = z + 1;
//   albumCovers[currentCover].style.zIndex = z;
// });

// import SpotifyWebApi from "spotify-web-api-js";

// //spotifyPlayer
// var Spotify = require("spotify-web-api-js");
// var s = new Spotify();
// var spotifyApi = new SpotifyWebApi();

// spotifyApi.setAccessToken("f19ddabdb3534b66896b149b9ab68780");

// // get Elvis' albums, passing a callback. When a callback is passed, no Promise is returned
// spotifyApi.getArtistAlbums("43ZHCT0cAZBISjO8DG9PnE", function (err, data) {
//   if (err) console.error(err);
//   else console.log("Artist albums", data);
// });

// // get Elvis' albums, using Promises through Promise, Q or when
// spotifyApi.getArtistAlbums("43ZHCT0cAZBISjO8DG9PnE").then(
//   function (data) {
//     console.log("Artist albums", data);
//   },
//   function (err) {
//     console.error(err);
//   }
// );

// var prev = null;

// function onUserInput(queryTerm) {
//   // abort previous request, if any
//   if (prev !== null) {
//     prev.abort();
//   }

//   // store the current promise in case we need to abort it
//   prev = spotifyApi.searchTracks(queryTerm, { limit: 5 });
//   prev.then(
//     function (data) {
//       // clean the promise so it doesn't call abort
//       prev = null;

//       // ...render list of search results...
//     },
//     function (err) {
//       console.error(err);
//     }
//   );
// }

// spotifyApi.getArtistAlbums("43ZHCT0cAZBISjO8DG9PnE", function (err, data) {
//   if (err) console.error(err);
//   else console.log("Artist albums", data);
// });

// // get Elvis' albums, using Promises through Promise, Q or when
// spotifyApi.getArtistAlbums('43ZHCT0cAZBISjO8DG9PnE').then(
//     function (data) {
//         console.log('Artist albums', data);
//     },
//     function (err) {
//         console.error(err);
//     }
// );

// spotifyApi.searchTracks("Love").then(
//     function (data) {
//         console.log('Search by "Love"', data);

// var artistNames = document.querySelectorAll('[[selector]]');
// var player = document.querySelector('player');
//
// for(i = 0; i < artistNames.length; i++) {
//   if(data.track.artistname === artistNames[i]){
//     var tracklink = data.track.previewMP4;
//     player.src = tracklink;
//   }
// }
//     },
//     function (err) {
//         console.error(err);
//     }
// );

// playbutton.addEventlistner("click", function () {
// player.src = tracklink;
//
// if(!player[i].pause()){
//   player[i].play();
// } else {
//   player[i].pause()
// }
// });

// const defaultHeight = "300px";
// const openedHeight = "100%";
// const readLess = `<svg width="34" height="17" viewBox="0 0 34 17" fill="none" xmlns="http://www.w3.org/2000/svg">
// <path d="M0 15.5833L16.2237 3.10933e-07H17.7763L34 15.5833L32.4863 17L17 4.47368L1.5137 17L0 15.5833Z" fill="#ffffff"/>
// </svg>Read less`;
// const readMore = `<svg width="34" height="18" viewBox="0 0 34 18" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M0.0771484 1.7592L16.2271 17.9092H17.7726L33.9226 1.7592L32.4158 0.291016L16.9999 13.2728L1.58397 0.291016L0.0771484 1.7592Z" fill="#ffffff" /></svg>Read more`;