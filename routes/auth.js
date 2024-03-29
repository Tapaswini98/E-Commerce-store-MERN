const express = require('express')
const router = express.Router();
const { check } = require('express-validator');
const {signout,signup,signin, isSignedIn} = require("../controllers/auth")

router.post("/signup",[
 check('name',"name should be atleast 3 letters")
  .isLength({min:3}),

  check('email',"email is required")
  .isEmail(),

  check('password',"password should be atleast 7 letters")
  .isLength({min:7})
],signup);

router.post("/signin",[
   check('email',"email is required")
   .isEmail(),
 
   check('password',"password is required")
   .isLength({min:7})
 ],
 signin
 );

router.get("/signout",signout);

router.get("/testroute",isSignedIn,(req,res)=>{
 res.json(req.auth);
})
module.exports = router;