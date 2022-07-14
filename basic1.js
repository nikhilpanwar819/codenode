// Building a very simple API but more efficient way than the previous one basic0.js
// This code is slightly different because here we just use the synchronous version to read the data.json file so that it can be loaded once at the starting and we don't need to read it every time the api routes are loaded as in the previous example(basic0.json)


const fs = require("fs");
const http = require('http');
const url = require('url');

// Synchronous
const data = fs.readFileSync(`${__dirname}/dev-data/data.json`,'utf-8');
const dataObj = JSON.parse(data);
     
const server = http.createServer((req, res) => {
    const pathName = req.url;

    if (pathName === '/' || pathName === '/overview'){
      res.end('This is the Overview');
    }else if (pathName === '/product'){
      res.end('This is the PRODUCT');
   } else if (pathName === '/api') {
        res.writeHead(200, { 'Content-Type': 'application/json'});
        res.end(data);

} else {
         res.writeHead(404, {
            'Content-type': 'text/html',
            'my-own-header': 'Hello World'
         });
         res.end('<h1>Page not Found</h1>');
      }
});
server.listen(8000,'127.0.0.1', () => {
   console.log("Listening to requests on port 8000");
});