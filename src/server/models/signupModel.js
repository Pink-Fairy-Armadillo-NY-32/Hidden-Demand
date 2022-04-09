const { Pool } = require('pg');
require('dotenv').config();

// const PG_URI = process.env.PG_URI;
const PG_URI = 'postgres://lbpmpknv:2DskAUf99JYKMVce219nHYIuShKkAG5G@batyr.db.elephantsql.com/lbpmpknv';

const pool = new Pool ({
  conectionString: PG_URI
});


module.exports = {
  query: (text, params, callback) => {
    console.log('query executed', text);
    return pool.query(text, params, callback);
  }
};


