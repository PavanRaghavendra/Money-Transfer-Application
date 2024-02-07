const mongoose=require("mongoose");
mongoose.connect("mongodb://localhost:27017/UserTable");
const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    lowercase: true,
    trim: true,
    minlength: 6,
    maxlength: 30,
  },
  firstname: {
    type: String,
    required: true,
    trim: true,
    maxlength: 50,
  },
  lastname: {
    type: String,
    trim: true,
    require:true,
    maxlength: 50,
  },
  password: {
    type: String, // Change type to String
    required: true,
    minlength: 6,
  },
});
const accountSchema=new mongoose.Schema(
  {
    userid:
    {
      type:mongoose.Schema.Types.ObjectId,
      ref:'User',
      required:true
    },
    balance:
    {
      type:Number,
      required:true
    }
  }
)
const Account=mongoose.model('Account',accountSchema);
const User = mongoose.model('User', UserSchema);
module.exports = {
  User,
  Account
};
