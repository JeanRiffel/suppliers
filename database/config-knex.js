const knex = require('knex')({
    client:'pg',
    connection:{
        host: '172.17.0.2',
        port: 5432,
        user: 'freight_db_user',
        password: '1234',
        database: 'freight_db'
    }
});

module.exports = knex;