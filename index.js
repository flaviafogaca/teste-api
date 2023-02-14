const express = require('express')
const axios = require('axios')

const app = express()

app.listen('3000')

app.route('/users').get( (req, res) => {
    axios.get('https://mockend.com/juunegreiros/BE-test-api/users')
    .then(result => res.send(result.data))
    .catch(error => console.error(error))
})

app.route('/products').get( (req, res) => {
    axios.get('https://mockend.com/juunegreiros/BE-test-api/products')
    .then(result => res.send(result.data))
    .catch(error => console.error(error))
})

//Para evoluir
app.route('/calculate').get( (req, res) => {
    console.log(req);
    res.send('teste')
});

axios
    .get('http://localhost:3000/calculate?users=2&products=1&products=4&products=50')
    .then(function (resposta) {
    console.log(resposta.data) 
});


