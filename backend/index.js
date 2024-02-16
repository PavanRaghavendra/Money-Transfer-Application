const express=require("express");
const cors=require("cors");
const app=express();
app.use(cors());
const Mainrouter=require("./routes/routes")
app.use(express.json());
app.use("/api",Mainrouter);
app.get('/', (req, res) => {
    res.send("Welcome");
})
require("dotenv").config();
app.listen(process.env.PORT);