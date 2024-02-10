
const express = require('express');
const { Account } = require('../Database/db');
const mongoose=require("mongoose");
const authmiddle = require('../middleware/Authmiddle');

const router = express.Router();

router.get("/balance",authmiddle,async (req, res) => {
    const userId = req.userid;
    try{
    const account = await Account.findOne({userid:userId});
   // console.log(account);
    res.json({balance: (account.balance)});
    }
    catch(error)
    {
        return res.status(404).json({msg:"account not found"});
    }
});

router.post("/transfer", authmiddle, async (req, res) => {
    //const session = await mongoose.startSession();

    //session.startTransaction();
    const { amount, to } = req.body;

    // Fetch the accounts within the transaction
    const account = await Account.findOne({ userid: req.userid });
    if (!account || account.balance < amount) {
        return res.status(400).json({
            message: "Insufficient balance"
        });
    }

    const toAccount = await Account.findOne({ userid: to });

    if (!toAccount) {
        return res.status(400).json({
            message: "Invalid account"
        });
    }

    // Perform the transfer
    await Account.updateOne({ userid: req.userid }, { $inc: { balance: -amount } })
    await Account.updateOne({ userid: to }, { $inc: { balance: amount } })
    res.json({
        message: "Transfer successful"
    });
});
module.exports = router;