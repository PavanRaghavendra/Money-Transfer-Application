const express=require("express");
const router=express.Router();
const userroute=require("./user");
const accountroute=require("./accounts");
router.use("/user",userroute);
router.use("/accountdata",accountroute);
module.exports=router;