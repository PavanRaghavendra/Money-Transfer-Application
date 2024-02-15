const express=require("express");
const cors=require("cors");
const app=express();
require('dotenv').config();
app.use(cors({origin:process.env.CLIENT_URL, credentials:true}))
const Mainrouter=require("./routes/routes")
app.use(express.json());
app.use("/api",Mainrouter);
app.get('/', (req, res) => {
    res.send("Welcome");
})