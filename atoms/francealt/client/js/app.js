// if you want to import a module from shared/js then you can
// just do e.g. import Scatter from "shared/js/scatter.js"


var thisdoc = window.document
var htmlTag = document.querySelector("html")
thisdoc.body.style.overflowX = "scroll"
thisdoc.body.style.overflowY = "hidden"
htmlTag.style.overflowX = "scroll"
htmlTag.style.overflowY = "hidden"

thisdoc.body.style.backgroundColor = "#EFF1F2"


var isAndroidApp = window.parent.document.querySelector('.android');
if (isAndroidApp) {
    document.addEventListener('touchstart', () => window.GuardianJSInterface.registerRelatedCardsTouch(true))
    document.addEventListener('touchend', () => window.GuardianJSInterface.registerRelatedCardsTouch(false))
}