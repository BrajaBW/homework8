const pool = require('./config')
const express = require('express')
const router = express.Router()

router.get('/film',(req,res)=>{
    const query = `SELECT*FROM film`

    pool.query(query, (err, result)=>{
        if (err) throw err;
        

        res.status(200).json(result.rows)
    })
})

router.get('/film/:id', (req,res)=>{
    const {id} = req.params

    const query = `SELECT * FROM film WHERE film_id = $1`
    pool.query(query,[id], (err, result)=>{
        if (err) throw err;
        

        res.status(200).json(result.rows)

   
    })
})

router.get('/category',(req , res) =>{
    const query = `SELECT * FROM category`

    pool.query(query, (err, result)=>{
        if (err) throw err;

        res.status(200).json(result.rows)
    })
})

router.get('/film/category/:id',(req, res)=>{
    const {id} = req.params
    const query = `SELECT f name 
    FROM film f 
    JOIN film_category fc ON f.film_id = fc.film_id
    JOIN category c ON fc.category_id = c.category_id
    WHERE c.category_id = $1;`
    pool.query(query,[id], (err, result)=>{
        if (err) throw err;

        res.status(200).json(result.rows)
    })
})



module.exports = router