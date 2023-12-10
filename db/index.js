const fs = require('fs')
const pool = require('../config')// ambil koneksi si config js

const seedQuery = fs.readFileSync("./siding.sql", "utf8");
pool.query(seedQuery, (err,result)=>{
    if (err) throw err; 
    //error hendler
    console.log('seeding sucses')
    pool.end()
})
