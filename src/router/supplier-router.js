const express = require('express');
const customerController = require('../controller/supplier-controller');

const router = express.Router();

router.get('/supplier', customerController.getAllSuppliers);

router.post('/supplier', customerController.saveSupplier);

module.exports = router;