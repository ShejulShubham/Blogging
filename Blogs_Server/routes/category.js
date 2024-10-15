const express = require('express')
const db = require('../db')
const utils = require('../utils')

const router = express.Router()
    
router.post('/add', (request, response) => {
    const { title, description } = request.body
    const statement = `INSERT INTO categories(title, description) 
    VALUES(?, ?);`
    db.pool.execute(
        statement,
        [title, description],
        (error, result) => {
            response.send(utils.createResult(error, result))
        }
    )
})

router.get('/all', (request, response) => {
    const statement = `SELECT id, title, description FROM categories
    ORDER BY id;`
    db.pool.query(statement, (error, categories) => {
        response.send(utils.createResult(error, categories))
    })
})


module.exports = router