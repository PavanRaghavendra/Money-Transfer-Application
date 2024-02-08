const JWT_secret=require("../config");
const jwt=require("jsonwebtoken");
const authmiddle=(async (req,res,next)=>
{
    const headers=req.Headers.authorization;
    if(!headers)
    {
        res.status(411).json({});
    }
    const token = headers.split(' ')[1];
    try {
        const decoded = jwt.verify(token, JWT_secret);
        req.userId = decoded.userId;
        next();
    } catch (err) {
        return res.status(403).json({});
    }
})
module.exports=authmiddle;