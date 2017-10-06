const exampleController = require('../controllers').example;
const express = require('express');
var router = express.Router();

router.get('/hello', (req, res) => {
    res.status(200);
    res.send(exampleController.hello());
});

router.get('/', (req, res) => {
    exampleController.list()
        .then((examples) => {
            res.status(200);
            res.send(examples);
        })
        .catch((error) => {
            res.send(error);
        });
});

router.post('/', (req, res) => {
    exampleController.create(req)
        .then((result) => {
            res.status(204);
            res.send();
        })
        .catch((error) => {
            res.send(error);
        });
});

module.exports = router;