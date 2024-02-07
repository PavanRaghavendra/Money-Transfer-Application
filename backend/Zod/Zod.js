const zod=require("zod");
const user=zod.object({
    username:zod.string().email(),
    firstname:zod.string().max(50),
    lastname:zod.string().max(50),
    password:zod.string().min(6),
})
module.exports=user;