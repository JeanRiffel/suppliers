const supplierSupplier = require('../service/supplier-service');

const getAllSuppliers = ( req , res )=>{
    supplierSupplier.getAllSuppliers()
        .then( ( dataSuppliers )=>{            
            res.status(200).send(dataSuppliers);
        })
        .catch( (error )=>{            
            res.status(400).send(error);
        });
}

const saveSupplier = (req , res)=>{
    const data = req.body;
    supplierSupplier.saveSupplier( data )
        .then( ( dataSuppliers )=>{
            res.status(200).send(dataSuppliers);
        })
        .catch( (error )=>{
            res.status(400).send(error);
        });
}

module.exports = {
    getAllSuppliers, 
    saveSupplier
}