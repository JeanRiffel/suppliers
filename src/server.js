
const express = require('express');
const routerSuppliers = require('./router/supplier-router');

const server = express();
const port = 3000;

server.use( express.urlencoded({ extended: true }));  
server.use(express.json());

server.use(routerSuppliers);

server.listen(port , ()=>{  
    console.log(`Server is running on port ${port} `)  
});
