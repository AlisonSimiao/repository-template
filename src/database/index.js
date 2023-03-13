const { Pool} = require('pg')
require('dotenv').config()


const connectionString = `postgres://postgres:${process.env.PASS}@db.dtjfgxxqalgxtrnnuulc.supabase.co:6543/postgres`
 
const pool = new Pool({
  connectionString,
})

module.exports = pool;

