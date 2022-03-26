The main goal of this tiny project is use some resource for handling CRUD operations.

Let make some simples CRUD operations in order to register new suppliers for a company.

- [Postgre SQL](https://www.npmjs.com/package/pg) - Package for handling Postgre SQL.
- [Knex](https://knexjs.org/) - Building SQL Querys.
- [Db-migrate](https://db-migrate.readthedocs.io/en/latest/) - Handling migrations.

The project uses a Docker Postgre Container for running.

### DB-Migrate Commands.

#### Create
    db-migrate create migrationname
        
#### Up
    db-migrate up

### Down
    
    If you want to let db-migrate execute all down migrations you can also call:    
        db-migrate reset