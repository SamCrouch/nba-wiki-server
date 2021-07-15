const express = require('express')
const app = express()
const port = process.env.PORT || 80;

app.use(express.json())


app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening at nba-wiki-sam.herokuapp.com`))