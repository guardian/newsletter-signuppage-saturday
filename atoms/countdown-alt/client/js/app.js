// if you want to import a module from shared/js then you can
// just do e.g. import Scatter from "shared/js/scatter.js"
fetch('https://support.theguardian.com/ticker.json')
  .then(
    function(response) {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
          response.status);
        return;
      }

      // Examine the text in the response
      response.json().then(function(data) {

        var contribs = document.querySelector('.contributed');
        var goal = document.querySelector('.goal');
        var goalResponse = '$' + new Intl.NumberFormat({ maximumSignificantDigits: 3 }).format(data.goal) + '<span>Our goal</span>';
        var contribResponseRound = Math.round(data.total)
        var contribResponse = '$' + new Intl.NumberFormat({ maximumSignificantDigits: 3 }).format(contribResponseRound) + '<span>contributed</span>';
        var percentage = (data.total / data.goal) * 100 - 30;
        // var percentageTest = (1000000 / data.goal) * 100;
        var progress = document.querySelector('.progress-animation');

        progress.style.width = percentage + "%";
        goal.innerHTML = goalResponse;
        contribs.innerHTML = 'You can still give';

      });
    }
  )
  .catch(function(err) {
    console.log('Fetch Error :-S', err);
  });

function countdown() {
  var date =  new Date();
  console.log(date);
  var str = date.toString();
  var daysCount =  document.querySelector('.days-to-give-replace');
  var textCount =  document.querySelector('.copy-replace');
  var imageCount =  document.querySelector('.days-image');
  var wrapper = document.querySelector('.eoy-thrasher__wrapper');

  if(str.includes('Dec 29 2020')) {
    daysCount.innerHTML = "3 days left to give in 2020 ...";
    textCount.innerHTML = "... and the number of supreme court justices appointed by Donald Trump, with implications for nearly every facet of American life, from voting rights to healthcare to racial inequality. The need for robust, fact-based reporting that highlights injustice and offers solutions is as great as ever. You've read 1871 articles in the past year. As 2021 approaches, we hope you’ll consider a year-end gift.";
    imageCount.setAttribute('src', 'https://uploads.guim.co.uk/2020/12/27/judges.jpg');
  } else if (str.includes('Dec 30 2020')) {
    daysCount.innerHTML = "2 days left to give in 2020 ...";
    textCount.innerHTML = "... and the number of degrees celsius we must limit warming to before 2050 to prevent catastrophic climate change. The Guardian views the climate crisis as the defining issue of our time. As 2021 approaches, the need for robust, fact-based reporting grounded in science is as great as ever. You've read 1871 articles in the past year. We hope you’ll consider a year-end gift to support our journalism.";
    imageCount.setAttribute('src', 'https://uploads.guim.co.uk/2020/12/27/planet.gif');
  }else if (str.includes('Dec 31 2020')) {
    daysCount.innerHTML = "1 day left to give in 2020 ... ";
    textCount.innerHTML = "... and the number of women or people of color who have ever been elected vice president of the US. From racial inequality to broken healthcare, from rapacious corporations to a climate crisis, the Guardian will tackle America’s systemic challenges in 2021. The need for robust, fact-based reporting is as great as ever. You've read 1871 articles in the past year. As the new year approaches, we hope you’ll consider a year-end gift.";
    imageCount.setAttribute('src', 'https://uploads.guim.co.uk/2020/12/27/trump_biden_final.gif');
    imageCount.classList.add('pulldown');
    wrapper.classList.add('colourChange');
  }else if (str.includes('Jan 01 2021')) {
    daysCount.innerHTML = "As the new year begins …";
    textCount.innerHTML = "… we want to thank everyone who has helped us reach our goal. The need for robust, fact-based journalism that highlights injustice and offers solutions is as great as ever. You've read 1871 articles in the past year. It’s not too late to give; our fundraiser closes 10 January.";
    imageCount.setAttribute('src', 'https://uploads.guim.co.uk/2020/12/27/trump_biden_final.gif');
    imageCount.classList.add('pulldown');
    wrapper.classList.add('colourChange');
  }else if (str.includes('Jan 02 2021')) {
    daysCount.innerHTML = "As the new year begins …";
    textCount.innerHTML = "… we want to thank everyone who has helped us reach our goal. The need for robust, fact-based journalism that highlights injustice and offers solutions is as great as ever. You've read 1871 articles in the past year. It’s not too late to give; our fundraiser closes 10 January.";
    imageCount.setAttribute('src', 'https://uploads.guim.co.uk/2020/12/27/trump_biden_final.gif');
    imageCount.classList.add('pulldown');
    wrapper.classList.add('colourChange');
  }else if (str.includes('Jan 03 2021')) {
    daysCount.innerHTML = "As the new year begins …";
    textCount.innerHTML = "… we want to thank everyone who has helped us reach our goal. The need for robust, fact-based journalism that highlights injustice and offers solutions is as great as ever. You've read 1871 articles in the past year. It’s not too late to give; our fundraiser closes 10 January.";
    imageCount.setAttribute('src', 'https://uploads.guim.co.uk/2020/12/27/trump_biden_final.gif');
    imageCount.classList.add('pulldown');
    wrapper.classList.add('colourChange');
  }else {
    daysCount.innerHTML = "Thank you for helping us beat our goal!";
    textCount.innerHTML = "Your support helped raise more than $1.25m for high impact journalism in the new year. From broken healthcare to corrosive racial inequality, from rapacious corporations to a climate crisis, the Guardian will tackle America’s systemic challenges in 2021. It’s not too late to give; our fundraiser closes 10 January.";
    imageCount.setAttribute('src', 'https://uploads.guim.co.uk/2020/11/20/eoy_home.png');
  }

}
countdown();
