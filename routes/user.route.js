const express = require("express")
const users = require("../controllers/user.controller");

const userRouter = express.Router();



userRouter.post("/user/register", users.userCreate);
userRouter.get("/user/findAll", users.userFindAll);
userRouter.get("/user/find/:user_id", users.userFindbyId);
userRouter.put("/user/update/:user_id", users.userUpdate);
userRouter.delete("/user/remove/:user_id", users.userDelete);





module.exports={userRouter}