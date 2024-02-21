
const jwt=require("jsonwebtoken");
require("dotenv").config();
const userauth=(async (req,res,next)=>
{
    const authToken = req.headers.authorization; 
    if(authToken)
    {
        const token = authToken;
       // console.log(token);
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.userId = decoded.userId;
        //console.log(req.userId);
        next();
    }
    else
    {
        res.status(403).json({msg: "Authentication failed"});
    }
})
module.exports=userauth;