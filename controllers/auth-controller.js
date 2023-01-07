const express = require("express");
const { User } = require("../models");
const bcrypt = require("bcrypt");
const router = express.Router();
const { createUserToken } = require("../middleware/auth");

// SIGN UP
// POST /auth/register
router.post("/register", async (req, res, next) => {
    //   has the password before storing the user info in the database
    try {
        const salt = await bcrypt.genSalt(10);
        const passwordHash = await bcrypt.hash(req.body.password, salt);

        req.body.password = passwordHash;

        const newUser = await User.create(req.body);

        res.status(201).json({
            user: newUser,
            isLoggedIn: true,
        });
    } catch (err) {
        res.status(400).json({ err: err.message });
    }
});

// SIGN IN
// POST /auth/login
router.post("/login", async (req, res, next) => {
    try {
        const loggingUser = req.body.username;
        const foundUser = await User.findOne({ username: loggingUser });
        const token = await createUserToken(req, foundUser);
        res.status(200).json({
            user: foundUser,
            isLoggedIn: true,
            token,
        });
    } catch (err) {
        res.status(401).json({ error: err.message });
    }
});





module.exports = router;

