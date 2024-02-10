const express=require("express");
const cors=require("cors");
const app=express();
app.use(cors(
    {
        origin:["https://money-wallet-app.vercel.app/"],
        methods:["POST","GET"],
        credentials:true
    }
));
const Mainrouter=require("./routes/routes")
app.use(express.json());
app.use("/api",Mainrouter);