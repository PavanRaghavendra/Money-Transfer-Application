const JWT_secret=require("../config");
const jwt=require("jsonwebtoken");
const authmiddle=(async (req,res,next)=>
{
    const authToken = req.headers.authorization; 
    if(authToken)
    {
        const token = authToken;
       // console.log(token);
        const decoded = jwt.verify(token, JWT_secret);
        req.userid = decoded.userId;
        //console.log(req.userid);
        next();
    }
    else
    {
        res.status(403).json({msg: "Authentication failed"});
    }
})
module.exports=authmiddle;