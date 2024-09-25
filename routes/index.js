const express = require('express')

const router = express.Router()
const UserSignUpController = require('../controller/UserSignUp')
const userSignInController = require('../controller/UserSignIn')
const authToken = require('../middleware/authToken')
const userDetailsController = require('../controller/UserDetails')

router.post("/signup", UserSignUpController)
router.post("/signin", userSignInController)
router.get("/user-details", authToken,userDetailsController)



module.exports = router;