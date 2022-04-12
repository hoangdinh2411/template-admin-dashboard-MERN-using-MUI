const authModel = require('../models/authModel.js');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const signUp = async (req, res) => {
  const {email, password} = req.body;
  try {
    const existingUser = await authModel.findOne({email});
    if (existingUser)
      return res
        .status(404)
        .json({error: 'The email already exist'});
    const hashedPassword = await bcrypt.hash(password);

    const newUser = await authModel.create({
      email,
      password: hashedPassword,
    });
    const token = jwt.sign(
      {
        email: newUser.email,
        id: newUser._id,
        role: newUser.role,
      },
      'authentication',
      {expiresIn: '12h'}
    );

    res
      .status(200)
      .json({success: {result: newUser, token}});
  } catch (error) {
    return res.status(500).json({
      error: 'Something wrong. Try again later !!!',
    });
  }
};
const signIn = (req, res) => {};

module.exports = {signUp, signIn};
