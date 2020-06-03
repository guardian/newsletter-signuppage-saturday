// if you want to import a module from shared/js then you can
// just do e.g. import Scatter from "shared/js/scatter.js"

import ScrollyTeller from "shared/js/scrollyteller.js"


const scrolly = new ScrollyTeller({
    parent: document.querySelector("#scrolly-1"),
    triggerTop: 1/3, // percentage from the top of the screen that the trigger should fire
    triggerTopMobile: 0.75,
    transparentUntilActive: true
});

scrolly.addTrigger({num: 1, do: () => {
    console.log("Console log 1");
}});

scrolly.watchScroll();