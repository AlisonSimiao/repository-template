require('dotenv').config()

const connection = `postgres://postgres:${process.env.PASS}@db.dtjfgxxqalgxtrnnuulc.supabase.co:6543/postgres`


const database = require('knex')({
  client: 'pg',
  connection,
  searchPath: ['knex', 'public'],
});

module.exports = database;

