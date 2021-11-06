
const { json } = require('body-parser');
const mysql = require('mysql');




const pool = mysql.createConnection({ 
    host: "parking-oracle-database.cvs0ld7wtgcu.us-east-2.rds.amazonaws.com",
    user: "admin",
    password: "smooshingTime2021",
    database: "lotdb"
})




let results = {}; 

results.all = () => 
{ 
    return new Promise((resolve, reject) => { 
        pool.query("SELECT * FROM lot" , function (err, result){ 
            if (err){ 
                return reject(err); 
            }
            console.log(result)
            return resolve(result);
        }); 
    }); 
}  

results.pass = () => 
{ 
    return new Promise((resolve, reject) => { 
        pool.query("SELECT lotName, pass, fullPer FROM ByPasses LEFT JOIN lot ON ByPasses.lotName = lot.name " , function (err, result){ 
            if (err){ 
                return reject(err); 
            }
            console.log(result)
            return resolve(result);
        }); 
    }); 
}  






module.exports = results; 
