const mysql = require('mysql2')

const pool = mysql.createPool({
    host: 'localhost',
    user: 'shejulshubham',
    password: 'shejul',
    port: 3306,
    database: 'blog',
    connectionLimit: 10,
})

module.exports = {
    pool,
}