const request = require('request');
const fs = require('fs');

const args = process.argv.slice(2)

request(args[0], (error, response, body) => {
  // Print the error if one occurred
  if (error !== null) {
  console.log('error:', error)
  }; 
  // Print the response status code if not 200
  if (response.statusCode !== 200) {
  console.log('statusCode:', response && response.statusCode)
  };
  // Print the HTML for the example.edu homepage to index.html file
  fs.writeFile('./index.html', body, err => {
    if (err) {
      console.error(err);
    }
    // file written successfully
  });
});


fs.readFile('./index.html', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  processFile(data)
})

function processFile(data) {
  console.log(`Downloaded and saved ${data.length} bytes to ./index.html`);
}

