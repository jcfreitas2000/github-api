const express = require('express')
const axios = require('axios');
const cors = require('cors');

const port = 3333
const app = express()

app.use(cors())
app.use(express.json());

app.post('/auth', (req, res) => {
    console.log(`Authorizing code ${req.body.code}`)

    axios.post('https://github.com/login/oauth/access_token', {
        client_id: '295d1effcd936172d7ea',
        client_secret: 'e17c842aca216aa478d6acbca2a63055bde40a58',
        code: req.body.code
    }, {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    })
        .then(function (response) {
            console.log(response)
            console.log(`Successfully retrieved access_token: ${response.data}`)
            res.json(response.data)
        })
        .catch(function (error) {
            console.log(`Failed retrieving access_token: ${error}`)
            res.statusCode = 401;
        });
})

app.listen(port, () => {
    console.log(`GitHub API auth helper listening at http://localhost:${port}`)
})
