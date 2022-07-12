//////////////////////////////////////////////////////////////////////////
//FILES

//Synchronous Way or Blocking Code --------------------------------------------------------------

// const fs = require("fs");
// const http = require('http');

// const textIn = fs.readFileSync("./txt/input.txt", "utf-8");
// console.log(textIn);

// const textOut = `This is all about Avocado: ${textIn}.\nCreated on ${Date.now()}`;

// fs.writeFileSync("./txt/output.txt", textOut);
// console.log("File Written");



// ASYNC Method or NON BLOCKING code ---------------------------------------------------------------

// const fs = require("fs");
// const http = require('http');

// fs.readFile('./txt/starrt.txt','utf-8', (err, data1)=>{
//     if(err) return console.log("ERROR ! 💥");

//     fs.readFile(`./txt/${data1}.txt`,'utf-8', (err, data2)=>{
//         console.log(data2);  
//         fs.readFile(`./txt/append.txt`,'utf-8', (err, data3)=>{
//             console.log(data3);
       
//             fs.writeFile('./txt/final.txt',`${data2}\n${data3}`,'utf-8', err =>{
//             console.log("Your File has been Written 👍");
//             })
//             });
//         });
// });
// console.log("Nikhil"); 


//////////////////////////////////////////////////////////////////////////
//SERVER

const fs = require("fs");
const http = require('http');
const url = require('url');
   

const server = http.createServer((req, res) => {
    const pathName = req.url;

    if (pathName === '/' || pathName === '/overview'){
      res.end('This is the Overview');
    }else if (pathName === '/product'){
      res.end('This is the PRODUCT');
   } else if (pathName === '/api') {

      fs.readFile(`${__dirname}/dev-data/data.json`,'utf-8', (err, data) => {
         const productData = JSON.parse(data);
         console.log(productData); 
   })
    
   res.end('API');
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
