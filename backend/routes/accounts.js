
const express = require('express');
const { Account } = require('../Database/db');
const {mongoose } = require('mongoose');
const authmiddle = require('../middleware/Authmiddle');

const router = express.Router();

router.get("/balance",authmiddle,async (req, res) => {
    const account = await Account.findOne({
        userId:req.userId
    });
    if(account===null)
    {
      return  res.status(404).json(
            {
                message:'Account not found',
                userId:req.userId,
            }
        )
    }
    res.status(200).json({
        balance: account.balance
    })
});

router.post("/transfer",async (req,res)=>{
    const session = await mongoose.startSession();

    session.startTransaction();
    const { amount, to } = req.body;

    // Fetch the accounts within the transaction
    const account = await Account.findOne({ userId: req.userId }).session(session);

    if (!account || account.balance < amount) {
        await session.abortTransaction();
        console.log("Insufficient balance")
        return;
    }

    const toAccount = await Account.findOne({ userId: to }).session(session);

    if (!toAccount) {
        await session.abortTransaction();
        console.log("Invalid account")
        return;
    }

    // Perform the transfer
    await Account.updateOne({ userId: req.userId }, { $inc: { balance: -amount } }).session(session);
    await Account.updateOne({ userId: to }, { $inc: { balance: amount } }).session(session);

    // Commit the transaction
    await session.commitTransaction();
    res.status(200).json(
        {
            message:"Transfer successful"
        }
    )
}
);
module.exports = router;