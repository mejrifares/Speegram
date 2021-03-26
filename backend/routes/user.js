const express = require('express')
const { userRegister, userLogin } = require('../controllers/user.controller')
const { validation, registerRules } = require('../mddleware/validation')

const isAuth = require("../mddleware/passportSet");

const router = express.Router()

// register user route
router.post("/register", registerRules(), validation, userRegister);

// login user route
router.post("/login", userLogin);

// auth user route
router.get(`/current`, isAuth, async (req, res) => {
    const user = await  User.findById(req.user.id)
    res.json(user)
});

// update user route

router.put("/update/:_id", (req, res) => {
    
    let { _id } = req.params;
    console.log(req.params)
    User.findByIdAndUpdate({ _id }, { $set: { ...req.body } })
        .then(() => res.send("user has been updated"))
        .catch((err) => res.send(err));
});
// get user route
router.get("/:_id", (req, res) => {
    // let id = req.params._id
    let { _id } = req.params;
    User.find({ _id })
      .then((user) => res.send(user))
      .catch((err) => res.send(err));
  });

router


module.exports = router

