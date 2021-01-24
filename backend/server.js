const { request } = require('express');
const express = require('express');
const products = require('./products');
const app = express();

app.get('/', (req, res) => {
    res.send('API is runnig');
});

app.get('/api/products', (req, res) => {
    res.json(products);
});

app.get('/api/products/:id', (req, res) => {
    const product = products.find(product => product._id === req.params.id);
    if (!product) {
        res.json({});
    } else {
        res.json(product);
    }

});

app.listen(5000, console.log('Server running on port 5000'));
