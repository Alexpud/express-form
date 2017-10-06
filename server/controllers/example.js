const Example = require('../models').Example;

module.exports = {
    hello() {
        return 'hello';
    },
    list() {
        return Example.all()
            .then((examples) => {
                return examples;
            });
    },
    create(req) {
        return Example.create({
                name: req.body.name
            })
            .then((result) => {
                return result;
            })
            .catch((error) => {
                return error;
            });
    }
};