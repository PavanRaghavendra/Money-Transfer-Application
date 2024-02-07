const user=require("../Zod/Zod")
async function Usermiddlewares(req,res,next)
{
    const {success}=user.safeParse(req.body);
    if(!success)
    {
        return res.status(411).json({
            message:"Zod inputs wrong"
        })
    }
    
    next();
}
module.exports=Usermiddlewares;