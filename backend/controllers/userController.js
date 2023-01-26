const asyncHandler = require("express-async-handler");
const bcrypt = require('bcryptjs')

// Import Model
const User = require("../models/user")

// @desc Register a new user
// @route /api/users
// @access Public
exports.registerUser = asyncHandler(async (req, res) => {
  console.log(req.body);
  const { name, email, password } = req.body;

  // Validation
  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Please include all fields");
  }

  // Find if user already exists
  const userExists = await User.findOne({email})

  if (userExists) {
    res.status(400);
    throw new Error("User already exist!")
  }

  // Hash Password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  // Create User
  const user = await User.create({
    name,
    email,
    password: hashedPassword,
  })

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
    })
  } else {
    res.status(400)
    throw new Error("Invalid user data")
  }

});


// @desc Login a  new user
// @route /api/users/login
// @access Public
exports.loginUser = asyncHandler(async (req, res) => {
  res.send("Login Route");
});





// Export method 2
// module.exports = {
//   registerUser,
//   loginUser
// }
