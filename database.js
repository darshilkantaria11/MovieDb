const cors = require('cors');
const { createPool } = require('mysql2')
const express = require('express')
const app = express()
const port = 5001

//USE TO SHARE DATA IN OTHER JS FILE
app.use(cors());

const pool = createPool({
    host: "sql12.freesqldatabase.com",
    user: "sql12602404",
    password: "Y2KpyjQHUB",
    connectionLimit: 10
})



app.get('/', (req, ress) => {
    var data
    pool.query(`select * from sql12602404.MovieDB`, (err, res) => {


        ress.send(res);

    })
})



app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})










