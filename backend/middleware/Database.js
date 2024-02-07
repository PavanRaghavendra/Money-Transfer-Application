const {User}=require("../Database/db");
const express=require("express");
const app=express();
app.use(express.json());
async function database(req,res,next)
{
    const exisitinguser=await User.findOne({
        username:req.body.username
    })
    if(exisitinguser)
    {
        res.status(411).json(
            {
                message:"Email is already in use"
            }
        )
    }
    next()
}
module.exports=database;