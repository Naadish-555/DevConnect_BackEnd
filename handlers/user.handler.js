const userModel = require("../models/user.model");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require("../models/user.model")

const register = async (req, res) => {
    const { firstName, lastName, username, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new userModel({ email, firstName, lastName, username, password: hashedPassword });
    await user.save();
    res.json({ message: 'User registered successfully' });
}

const login = async (req, res) => {
    try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
    return res.status(401).json({ error: 'Authentication failed' });
    }
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
    return res.status(401).json({ error: 'Authentication failed' });
    }
    delete user.password;
    // console.log
    const token = jwt.sign({ user }, process.env.JWT_SECRET, {
        expiresIn: '1h',
    });
    res.status(200).json({ token });
    } catch (error) {
        console.log(error);
    res.status(500).json({ error: 'Login failed' });
    }
    };

module.exports = {register,login}