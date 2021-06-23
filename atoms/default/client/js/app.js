// Add class to byline when left and right paragraphs scroll into view
// NOTE: This was the first attempt, using getClientBoundingRect and 
// a debounce function to improve performance. 


/*
const leftFirstParagraph = document.querySelector(".content__body-wrapper--left--first")
const rightFirstParagraph = document.querySelector(".content__body-wrapper--right--first")
const windowHeight = window.innerHeight

const checkPositionLeft = () => {
    if (leftFirstParagraph.getBoundingClientRect().top <= windowHeight / 2 && leftFirstParagraph.getBoundingClientRect().bottom >= (windowHeight / 4) - 50) {
        leftByline.classList.add("inView")
    } else {
        leftByline.classList.remove("inView")
    }
}
const checkPositionRight = () => {
    if (rightFirstParagraph.getBoundingClientRect().top <= windowHeight / 4 && rightFirstParagraph.getBoundingClientRect().bottom >= (windowHeight / 4) - 50) {
        rightByline.classList.add("inView")
    } else {
        rightByline.classList.remove("inView")
    }
}

const debounce = (func, wait) => {
    let timeout  
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout)
        func(...args)
      }
  
      clearTimeout(timeout)
      timeout = setTimeout(later, wait)
    }
  }
  var debouncedCheckPosition = debounce(function() {
    checkPositionLeft(), checkPositionRight()
  }, 200)

  window.addEventListener('scroll', debouncedCheckPosition)
  */




// NOTE: The more performant way to detect elements on scroll
// is to use the Intersection Observer

const leftByline = document.querySelector(".content__byline-wrapper--left")
const leftContent = document.querySelectorAll(".content__body-wrapper--left")
const rightByline = document.querySelector(".content__byline-wrapper--right")
const rightContent = document.querySelectorAll(".content__body-wrapper--right")

const mobileWidth = window.matchMedia('(max-width: 739px)')

// Update left column
const setLeftRootMargin = () => mobileWidth.matches ? "15% 0px -20% 0px" : "15% 0px -55% 0px"
const optionsLeft = {
    rootMargin: setLeftRootMargin(),
    threshold: 0.2
}
const observerLeft = new IntersectionObserver(function(entries) {
    console.log(entries)
	if(entries[0].isIntersecting === true) {
        leftByline.classList.add("inView")
    } else {
        leftByline.classList.remove("inView")
    }        
}, optionsLeft)

for (i = 0; i < leftContent.length; i++) {
    observerLeft.observe(leftContent[i])
}


// Update right column
const setRightRootMargin = () => mobileWidth.matches ? "50% 0px -40% 0px" : "10% 0px -75% 0px"
const optionsRight = {
    rootMargin: setRightRootMargin(),
    threshold: 0.2
}
const observerRight = new IntersectionObserver(function(entries) {
	if(entries[0].isIntersecting === true) {
        rightByline.classList.add("inView")
        console.log("inview")
    } else {
        rightByline.classList.remove("inView")
        console.log("not inview")
    }        
}, optionsRight)

for (i = 0; i < leftContent.length; i++) {
    observerRight.observe(rightContent[i])
}






// Open byline 'about drawer'
const bylineInfoWrapper = document.querySelector(".content__byline-wrapper--right--about-content")
const toggle = document.querySelector(".toggle")

toggle.addEventListener("click", () => {
    if (!bylineInfoWrapper.classList.contains("openMe")) {
        bylineInfoWrapper.classList.add("openMe")
    } else {
        bylineInfoWrapper.classList.remove("openMe")
    }
})