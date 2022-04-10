const { Pool } = require('pg');
// require('dotenv').config();

// const PG_URI = process.env.PG_URI;
const PG_URI = 'postgres://lbpmpknv:0fp-cPwpwvVTw3R_tJmv4vvS-UmrPHIy@batyr.db.elephantsql.com/lbpmpknv';
// const PG_URI = 'postgres://wcphwqir:uCT_XLIaSqGo3L5isHrtphCaW2vyW7ae@raja.db.elephantsql.com/wcphwqir'
// 2DskAUf99JYKMVce219nHYIuShKkAG5G

const pool = new Pool ({
  connectionString: PG_URI,
 
});


module.exports = {
  query: async (text, params, callback) => {
    try{
    console.log('query executed', text);
    const result = await pool.query(text, params, callback)
    // console.log("result", result);
    return result;
    } 
    catch(e){
      console.log("error: ", e)
    }
  }
};


