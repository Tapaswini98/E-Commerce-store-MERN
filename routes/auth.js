const express = require('express')
const router = express.Router();
const { check } = require('express-validator');
const {signout,signup} = require("../controllers/auth")

router.post("/signup",[
 check('name',"name should be atleast 3 letters")
  .isLength({min:3}),

  check('email',"email is required")
  .isEmail(),

  check('password',"password should be atleast 7 letters")
  .isLength({min:7})
],signup);
router.get("/signout",signout);

module.exports = router;