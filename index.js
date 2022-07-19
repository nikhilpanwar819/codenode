const fs = require("fs");
const http = require('http');
const url = require('url');
const replaceTemplate = require('./modules/replacetemp');
   
const tempOverview = fs.readFileSync(`${__dirname}/templates/overview.html`,'utf-8');
const tempCard = fs.readFileSync(`${__dirname}/templates/template-card.html`,'utf-8');
const tempProduct = fs.readFileSync(`${__dirname}/templates/product.html`,'utf-8');


const data = fs.readFileSync(`${__dirname}/dev-data/data.json`,'utf-8');
const dataObj = JSON.parse(data);

const server = http.createServer((req, res) => {

    const { query, pathname } = url.parse(req.url, true);

    // Overview Page
    if (pathname === '/' || pathname === '/overview'){
      res.writeHead(200, { 'Content-Type': 'text/html'});

      const cardsHtml = dataObj.map(el => replaceTemplate(tempCard, el)).join('');
      const output = tempOverview.replace('{%PRODUCT_CARDS%', cardsHtml);

      res.end(output);
   
   //Products Page 
    }else if (pathname === '/product'){
      res.writeHead(200, { 'Content-Type': 'text/html'});
      const product = dataObj[query.id];
      const output = replaceTemplate(tempProduct, product);
      res.end(output);

   // API
   } else if (pathname === '/api') {
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