const { Pool } = require('pg');
require('dotenv').config();
/** CHANGED DATABASE CONNECTION */
const PG_URI = 'postgres://lfxjrfqt:u7z6LjLXwJl4LDaiRhZUdnAkIInq9UyV@batyr.db.elephantsql.com/lfxjrfqt';
// const PG_URI = 'postgres://lbpmpknv:2DskAUf99JYKMVce219nHYIuShKkAG5G@batyr.db.elephantsql.com/lbpmpknv';

const pool = new Pool ({
  connectionString: PG_URI
});


module.exports = {
  query: (text, params, callback) => {
    console.log('query executed', text);
    return pool.query(text, params, callback);
  }
};


