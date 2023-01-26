// @desc Register a new user
// @route /api/users
// @access Public
exports.registerUser = (req, res) => {
  console.log(req.body);
  const { name, email, password } = req.body;

  // Validation
  if(!name || !email || !password)  {
    res.status(400);
    throw new Error("Please include all fields")
  }

  res.send("Register Route");
};

// @desc Login a  new user
// @route /api/users/login
// @access Public
exports.loginUser = (req, res) => {
  res.send("Login Route");
};

// Export method 2
// module.exports = {
//   registerUser,
//   loginUser
// }
