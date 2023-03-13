const database = require("../../database");

database.query(`
drop table if exists clientes;

CREATE TABLE IF NOT EXISTS clientes(
    id serial,
    img text,
    name text,
    tel text,
    job text
)`)
.then(()=> console.log('migrations sucess'))
.catch(err => console.error(err))

