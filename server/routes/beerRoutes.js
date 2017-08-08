const FetchFill = require('./fetch-fill')
const keys = require('../config/keys');

const fetch = FetchFill.fetchFill.fetch

// routes for all beer searches
module.exports = app => {
  //a rough search endpoint used for grabbing autocomplete input--autocomplete needs to be improved
  app.get('/api/searchbeer', (req, res) => {
    console.log('server req', req.query.input)
    let userReq = req.query.input;
    //let userReq = req.query.inputValue; //hardcoded search criteria, I would Exptect 'Naughty 90' to be one of the results
    let allBeers = [];  //array to be returned to the user

    const getAllBeers = function(page) {
      let pageNum = page || 1;
      let beers = [];

      let url = 'http://api.brewerydb.com/v2/search?key=' + keys.beerKey + '&q=' + userReq + '&type=beer&p=' + pageNum;

      fetch(url)
        .then(res => res.json())
        .then(body => {
          if (!body.data) {
            return beers;
          }
          for(let j = 0; j < body.data.length; j++) {
            beers.push(body.data[j].name);
          }
        return beers;
      }).then(beers => {
        if (!beers.length) {
          var flattened = [].concat.apply([], allBeers); //used to flatten the returned arrays
          res.send(flattened);
          return;

        } else if (pageNum >= 2) {
          var flattened = [].concat.apply([], allBeers);
          var sorted = flattened.sort().slice(0, 8)
          console.log(sorted)
          res.send(sorted);
          return;

        } else {
          allBeers.push(beers);
          getAllBeers(pageNum + 1);
        }
      });
    };
    getAllBeers(1); //start query on page 1
  });
}