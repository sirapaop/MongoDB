module.exports = (app) => {
    const Customer = require("../controllers/customer.controller.js")

    app.get('/', Customer.index);
    app.get('/api/customer',Customer.findAll);
}

