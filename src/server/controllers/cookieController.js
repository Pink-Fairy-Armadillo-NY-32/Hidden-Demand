
const cookie = {};

cookie.setCookie = async(req,res,next)=>{
    console.log('entered setCookie')
res.cookie('user_id' , res.locals.user_id,{httpOnly:true});
return next();
}

module.exports = cookie ;