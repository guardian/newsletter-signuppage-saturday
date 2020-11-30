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
        console.log(data, 'data');

        var contribs = document.querySelector('.contributed');
        var goal = document.querySelector('.goal');
        var goalResponse = '$' + new Intl.NumberFormat({ maximumSignificantDigits: 3 }).format(data.goal) + '<span>Our goal</span>';
        var contribResponseRound = Math.round(data.total)
        var contribResponse = '$' + new Intl.NumberFormat({ maximumSignificantDigits: 3 }).format(contribResponseRound) + '<span>contributed</span>';
        var percentage = (data.total / data.goal) * 100;
        // var percentageTest = (1000000 / data.goal) * 100;
        var progress = document.querySelector('.progress-animation');

        // console.log(percentageTest);
        console.log(progress);

        progress.style.width = percentage + "%";
        goal.innerHTML = goalResponse;
        contribs.innerHTML = contribResponse;

      });
    }
  )
  .catch(function(err) {
    console.log('Fetch Error :-S', err);
  });
