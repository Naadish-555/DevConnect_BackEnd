const userModel = require("../models/user.model");
const bcrypt = require('bcrypt');

const register = async (req, res) => {
    const { firstName, lastName, username, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new userModel({ email, firstName, lastName, username, password: hashedPassword });
    await user.save();
    res.json({ message: 'User registered successfully' });
}


module.exports = {
    register
}