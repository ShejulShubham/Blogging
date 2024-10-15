const express = require('express')
const db = require('../db')
const utils = require('../utils')
const config = require('../config')

const router = express.Router()

router.delete('/remove', (request, response) => {
    const { id } = request.query
    const statement = `DELETE FROM blogs WHERE id = ?;`

    db.pool.execute(statement, [id], (error, result) => {
        response.send(utils.createResult(error, result))
    })
})

router.put('/update', (request, response) =>{
    const { id, title, content } = request.body
    const statement = `UPDATE blogs SET
    title = ?, content = ?
    WHERE id = ?;`

    db.pool.execute(statement, [title, content, id], (error, result) => {
        response.send(utils.createResult(error, result))
    })
})

router.post('/add', (request, response) => {
    const { title, content, userId, categoryId} = request.body
    const statement = `INSERT INTO blogs (title, content, userId, categoryId) VALUES
    (?, ?, ?, ?);`

    db.pool.execute(statement, [title, content, userId, categoryId], (error, result) => {
        response.send(utils.createResult(error, result))
    })
})


router.get('/all', (request, response) => {
    const { page } = request.query
    const limit = 10
    const offset = (page - 1) * limit
    const statement = `SELECT b.id, b.title, b.create_time, u.full_name as author, c.title as category
    FROM blogs b JOIN users u
    ON u.id = b.userId
    JOIN categories c
    ON c.id = b.categoryId
    ORDER BY b.id DESC
    LIMIT ? OFFSET ?;`

    db.pool.query(statement, [limit, offset], (error, blogs) => {
        response.send(utils.createResult(error, blogs))
    })
})


router.get('/details', (request, response) => {
    const { id } = request.query
    const statement = `SELECT id, title, content, create_time, userId, categoryId FROM blogs
    WHERE id = ?
    ORDER BY id DESC
    LIMIT 1;`

    db.pool.query(statement, [id], (error, blog) => {
        response.send(utils.createResult(error, blog))
    })
})

router.get('/search', (request, response) => {
    const { title }= request.query
    const statement = `SELECT id, title, content, create_time, userId, categoryId FROM blogs
    WHERE LOWER(title) LIKE ?
    LIMIT 5;`
    const search = '%' + title.toLowerCase() + '%'
    db.pool.query(statement, [search], (error, blogs) => {
        response.send(utils.createResult(error, blogs))
    })
})






module.exports = router