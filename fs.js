//Synchronous or Blocking Code --------------------------------------------------------------

const fs = require("fs");
const http = require('http');

const textIn = fs.readFileSync("./txt/input.txt", "utf-8");
console.log(textIn);

const textOut = `This is all about Avocado: ${textIn}.\nCreated on ${Date.now()}`;

fs.writeFileSync("./txt/output.txt", textOut);
console.log("File Written");



// Asynchronous or NON BLOCKING code ---------------------------------------------------------------

const fs = require("fs");
const http = require('http');

fs.readFile('./txt/starrt.txt','utf-8', (err, data1)=>{
    if(err) return console.log("ERROR ! 💥");

    fs.readFile(`./txt/${data1}.txt`,'utf-8', (err, data2)=>{
        console.log(data2);  
        fs.readFile(`./txt/append.txt`,'utf-8', (err, data3)=>{
            console.log(data3);
       
            fs.writeFile('./txt/final.txt',`${data2}\n${data3}`,'utf-8', err =>{
            console.log("Your File has been Written 👍");
            })
            });
        });
});
console.log("Nikhil"); 
