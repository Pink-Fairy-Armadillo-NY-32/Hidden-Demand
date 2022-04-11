const { Pool } = require('pg');
const PG_URI = 'postgres://lbpmpknv:0fp-cPwpwvVTw3R_tJmv4vvS-UmrPHIy@batyr.db.elephantsql.com/lbpmpknv';
const pool = new Pool ({
  connectionString: PG_URI,
});


module.exports = {
  query: async (text, params, callback) => {
    try{
    console.log('query executed', text);
    const result = await pool.query(text, params, callback)
    return result;
    } 
    catch(e){
      console.log("error: ", e)
    }
  }
};


