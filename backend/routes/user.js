const express = require ('express')
const { userRegister, userLogin } = require('../controllers/user.controller')
const { validation, registerRules } = require('../mddleware/validation')

const isAuth = require("../mddleware/passportSet");

const router = express.Router()


router.post ("/register",registerRules(),validation, userRegister );
router.post ("/login", userLogin);
router.get(`/current`, isAuth(), (req, res) => {
    // console.log(req)
    
    res.json(req.user)});
    



module.exports = router

