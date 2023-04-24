var jwt = require('jsonwebtoken');
const JWT_SECRET = 'Hello';

const fetchuser = (req,res,next)=>{
            // fetching token from the user login collection in thunder client
    const token = req.header('auth-token');
    if(!token){
        res.status(401).send({error:"Please authenticate using a valid token"})
    }
    try{
        const data = jwt.verify(token, JWT_SECRET);
        req.user = data.user;
        // next is to execute (req,res) in getuser function in auth.js
        next();
    }catch(error){
        res.status(401).send({error:"Please authenticate usinga valid token"})
    }
}
module.exports = fetchuser;