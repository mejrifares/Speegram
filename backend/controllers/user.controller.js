const User = require('../models/user')
const bcrypt = require("bcryptjs");

require("dotenv").config({ path: "../config/.env" });

const secretOrKey = process.env.secretOrKey;

const jwt = require("jsonwebtoken");


// add user

exports.userRegister = async (req, res) => {
    const { name, email, password,bio,phone } = req.body;
    const searchResult = await User.findOne({ email });
    if (searchResult) return res.status(404).json({ msg: `User already registred` });



    try {
        const newUser = new User({
            name,
            email,
            password,
            bio,
            phone
        })

        //  bcrypt password

        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt);

        newUser.password = hash;

        // end bcrypt



        await newUser.save()
        await res.status(201).json({ msg: "user register successfuly" })


    } catch (error) {
        console.error("failed register", error)
        res.status(401).json({ msg: "failes user register" })

    }
}
    // login user

    exports.userLogin = async (req, res) => {

        const { email, password } = req.body;

        // console.log(email, password)

        const user = await User.findOne({ email });

        if (!user) return res.status(401).json({ msg: "Wrong email" });

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) return res.status(401).json({ msg: "Wrong password" });

        try {
            const payload = {
                id: user._id,
                name: user.name,
                email: user.email,
                bio : user.bio,
                phone :user.phone
            }


            const token = await jwt.sign(payload, secretOrKey);

            res.status(200).json({ token: `Bearer ${token}` });
        } catch (error) {
            console.error(error);
            res.status(404).json({ errors: error });
        }

    }

