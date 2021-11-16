var DB = require('./dboperations');
const path = require('path'); 

const express = require('express'); 

var lot = require('./lot'); 
const { json } = require('body-parser');

const app = express(); 

const PORT = process.env.PORT || 5000; 

app.listen(PORT, () => console.log(`Sever Started on port: ${PORT}`));

app.get('/get', async function(req, res) { 

     try { 
          let result = await DB.all();

          json(result); 

          console.log(result); 
          res.json({lots: result}); 
     } 
     catch(err){ 
          console.log(err); 
     }
}); 

app.get('/pass', async function(req, res) { 

     try { 
          let result = await DB.pass();

          json(result); 

          console.log(result); 
          res.json({passes: result}); 
     } 
     catch(err){ 
          console.log(err); 
     }
}); 

 



