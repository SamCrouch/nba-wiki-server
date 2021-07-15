const express = require('express');
const knex = require('knex')(require('./knexfile.js')['development']);
const app = express()
const port = process.env.PORT || 80;

app.use(express.json())


app.get('/', function(req, res) {
    knex.select('*')
        .from('nba_teams')
        .then(data => res.status(200).json(data))
        .catch(err =>
            res.status(404).json({
                message: 'The NBA has disbanded'
            }))
})

app.listen(port, () => console.log(`Example app listening at nba-wiki-sam.herokuapp.com`))