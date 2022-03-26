const knex = require('../../database/config-knex');

const  getAllSuppliers = ()=>{  
    try{
        return knex.select('*').from('common.suppliers');                
   }catch(error){
       return error;
   }
}

const saveSupplier = (customers)=>{
    try{
        return knex('common.suppliers').insert(customers);
    }catch(error){
        return error;
    }
}

module.exports = {
    getAllSuppliers,
    saveSupplier
}