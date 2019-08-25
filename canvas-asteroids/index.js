// Author: Rich Rose
// Description: A sample template for using exisiting HTML
//

// Define dependencies
var pug  = require('pug');

// Function: gameAsteroids
function gameAsteroids(req, res) {
  // Define the view to be displayed
  const pugTemplate= pug.compileFile('views/template.pug');

  // Create the HTML view
  res.status(200).send(pugTemplate({
  }));
}

// Entrypoint: marvelFilmAPI
// Description: This is the Cloud Function endpoint
exports.gameTemplate= (req, res) => {
  // Display the relevant film
  gameAsteroids(req, res);
};

