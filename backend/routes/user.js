const bcrypt=require("bcrypt");
const express=require("express");
const zod=require("zod");
const router=express.Router();
const jwt=require("jsonwebtoken");
const Usermiddleware=require("../middleware/Middlewares");
const database=require("../middleware/Database")
const {User}=require("../Database/db");
const {Account}=require("../Database/db");
const userauth = require("../middleware/Userauth");
require('dotenv').config();
const app=express();
app.use(express.json());
router.post("/Signup",Usermiddleware,database,async (req,res)=>{
    try{
    const password=req.body.password;
    const hash = await bcrypt.hash(password,10);
    const user=await User.create({
        username:req.body.username,
        password:hash,
        firstname:req.body.firstname,
        lastname:req.body.lastname
    })
    const userId=user._id;
    await Account.create(
        {
            userid:userId,
            balance:1+Math.random()*10000
        }
    )
    const token=jwt.sign({userId},process.env.JWT_SECRET);
    res.status(200).json(
        {
            message:"User Created Sucessfully",
            token:token
        }
    )
    }
    catch(error)
    {
        res.status(404).json(
            {
                message:"unsucessfull"
            }
        )
    }
});
const siginbody=zod.object(
    {
        username:zod.string().email(),
        password:zod.string()
    }
)
router.post("/Signin",async (req,res)=>{
    const password=req.body.password;
    const {success}=siginbody.safeParse(req.body);
    try{
    if(!success)
    {
        return res.status(411).json(
            {
                msg:"Incorrect inputs"
            }
        )
    }
    const exisitinguser=await User.findOne(
        {
            username:req.body.username
        }
    );
    if(exisitinguser)
    {
        const isvalid=await bcrypt.compare(password,exisitinguser.password);
        if(isvalid)
        {
        const userId=exisitinguser._id;
        const token=jwt.sign({userId},process.env.JWT_SECRET);
        return res.status(200).json({
            token:token
        })
    }
    if(!isvalid)
    {
        return res.status(411).json({
            mag:"Wrong password"
        })
    }
    }
}
catch(error)
{
    return res.status(411).json({
        message:"Error While logging in"
    })
}
});
const Updatebody=zod.object({
    username:zod.string(),
    password:zod.string().min(6),
    firstname:zod.string(),
    lastname:zod.string()
})
router.put("/update",async (req,res)=>
{
    const {success}=Updatebody.safeParse(req.body);
        if (!success) {
            res.status(411).json({
                message: "Error while updating information"
            })
        }
        const exisitinguser=await User.findOne(
            {
                username:req.body.username
            }
        );
        if(exisitinguser){
            const password=req.body.password;
            const hash = await bcrypt.hash(password,10);
            password=hash
        await User.updateOne(req.body, {
            _id: req.userId
        })
        res.json({
            message: "Updated successfully"
        })
    }
    return res.status(411).json(
        {
            msg:"user doesn't find in database plzzz signup.."
        }
    )
});
router.get("/bulk", async (req, res) => {
    const filter = req.query.filter;
   
    try {
        const users = await User.find({
            "$or": [
                { firstname: { "$regex": filter, "$options": "i" } }, //  i-means Case-insensitive search
                { lastname: { "$regex": filter, "$options": "i" } }
            ]
        });

        res.json({
            users: users.map(user => ({
                username: user.username,
                firstname: user.firstname,
                lastname: user.lastname,
                _id: user._id
            }))
        });
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
    }
});
router.get("/data",userauth,async (req,res)=>
{
    const userId=req.userId;
    try{
        const user= await User.findOne({_id:userId});
        res.json({name:(user.firstname)});
    }
    catch(error)
    {
        return res.status(404).json({msg:"account not found"});
    }
})
module.exports=router;
