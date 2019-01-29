//1st code
// var http = require('http');
// //create a server object:
// http.createServer(function (req, res) {
//   res.write('Hello World!'); //write a response to the client
//   res.end(); //end the response
// }).listen(8080); //the server object listens on port 8080

//2nd code
// var http = require('http');
// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   //Return the url part of the request object:
//   res.write(req.url);
//   res.end();
// }).listen(8080);

//3rd code
// var http = require('http');
// var url = require('url');
// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   /*Use the url module to turn the querystring into an object:*/
//   var q = url.parse(req.url, true).query;
//   /*Return the year and month from the query object:*/
//   var txt = q.year + " " + q.month;
//   res.end(txt);
// }).listen(8080);


// //4th code
// var fs = require('fs');
// //create an empty file named mynewfile2.txt:
// fs.appendFile('mynewfile2.txt', 'wfhgfduudgguguusuhghsgs', function (err, file) {
//   if (err) throw err;
//   console.log('Saveing the file..!');
// });

// //5th code
// var fs = require('fs');
// fs.open('mynewfile1.txt', 'w', function (err, file) {
//   if (err) throw err;
//   console.log('Saved!');
// });

// //6th code
// var fs = require('fs');
// fs.writeFile('mynewfile3.txt', 'Hello content!', function (err) {
//   if (err) throw err;
//   console.log('Saved!');
// });

// //7th code
// var fs = require('fs');
// fs.appendFile('mynewfile2.txt', ' This is my text.', function (err) {
//   if (err) throw err;
//   console.log('Updated!');
// });

// //8th code
// var fs = require('fs');
// //The fs.writeFile() method replaces the specified file and content:
// fs.writeFile('mynewfile2.txt', 'This is my text.......!', function (err) {
//   if (err) throw err;
//   console.log('Replaced!');
// });

// // //9th code
//  var fs = require('fs');
// //It will deleted the file.
//  fs.unlink('mynewfile2.txt', function (err) {
//   if (err) throw err;
//   console.log('File deleted!');
// });

// //10th code
// var fs = require('fs');
// fs.rename('mynewfile2.txt', 'myrenamedfile.txt', function (err) {
//   if (err) throw err;
//   console.log('File Renamed!');
// });

// //11th code
//  var fs = require('fs');
// //It will deleted the file.
//  fs.unlink('myrenamedfile.txt', function (err) {
//   if (err) throw err;
//   console.log('File deleted!');
// });
