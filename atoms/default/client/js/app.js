// open and close on mobile
const openButtons = document.querySelectorAll(".pb-plus");

for (var i = 0; i < openButtons.length; i++) {
  openButtons[i].addEventListener("click", function () {
    var openMe = this.parentNode;
    if (!this.classList.contains("open")) {
      for (var j = 0; j < openButtons.length; j++) {
        const wrapper = document.querySelectorAll(".mobile-drawer")
        const wrapperBtn = wrapper[j].querySelector(".pb-plus")
        wrapper[j].classList.remove("open")
      }
    }

    openMe.classList.toggle("open");
    openMe.scrollIntoView({behavior: "smooth"});
    this.classList.toggle("open");
  });
}


// scroll left column to match content in right column
function findCardContentBlock () {
  const contentBlockAll = document.querySelectorAll('.content-block')
  if (contentBlockAll.length > 0) {
    let thisBlock = contentBlockAll[0]
    contentBlockAll.forEach((contentBlock) => {
      const top = contentBlock.getBoundingClientRect().top
      if (top < 50) {
        thisBlock = contentBlock
      }
    })
    return thisBlock
  } else {
    return false
  }
}

function scrollIndexTo (block) {
  const targetBlockName = block.dataset.name
  const indexBlockAll = document.querySelectorAll('.pb-left__block-wrapper')
  const currentBlock = document.querySelector('.pb-left')
  const currentBlockName = currentBlock.dataset.current
  if (targetBlockName != currentBlockName) {
    indexBlockAll.forEach((indexBlock) => {
      const thisBlockName = indexBlock.dataset.name
      if (thisBlockName == targetBlockName) {
        highlightCurrentIndex(indexBlock)
        currentBlock.dataset.current = targetBlockName
        setTimeout (() => {
          currentBlock.scrollTo({
            top: indexBlock.offsetTop,
            behavior: 'smooth'
          });
        }, 500)

      }
    })
  }
}

// debounce function
const debounce = (func, wait) => {
  let timeout;

  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };

    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

var debouncedUpdateIndex = debounce(function() {
  updateIndex()
}, 200);

window.addEventListener('wheel', debouncedUpdateIndex);


const anchorButton = document.querySelectorAll('.block-anchor')

anchorButton.forEach((b) => {
  b.addEventListener('click', () => {
    setTimeout(() => {
      updateIndex()
    },1000)
  })
})

function updateIndex() {
  const currentBlock = findCardContentBlock()
  if (currentBlock) {
    scrollIndexTo(currentBlock)
  }
}

// highlight top story
function highlightCurrentIndex(i) {
  const previousHover = document.querySelector('.block-anchor.hover')
  if (previousHover) {
    previousHover.classList.remove('hover')
  }
  i.querySelector('.block-anchor').classList.add('hover')
}






