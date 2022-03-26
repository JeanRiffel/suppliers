'use strict';


exports.up = function(db) {
  const create = db.createTable('suppliers', 
        {
          id: { type:'int', primaryKey: true, autoIncrement:true  },
          name : { type : 'string',  length:20, notNull:true }
        }      
  )
  return create;
};

exports.down = function(db) {
  const drop = db.dropTable('suppliers');
  return drop;
};

exports._meta = {
  "version": 1
};
