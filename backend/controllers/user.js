const bcrypt = require('bcrypt');
const Users = require("../models/user.js");
const jwt = require('jsonwebtoken');

// Hash password
const hashPassword = (password, rounds) => {
    const salt = bcrypt.genSaltSync(rounds);
    const hashed = bcrypt.hashSync(password, salt);
    return hashed;
}

// register user
module.exports.registerUser = async (req, res) => {
    try {
        const hashed = hashPassword(req.body.password, 10);
        console.log(hashed);
        const newStudent = await Users.create({
            full_name: req.body.full_name,
            email: req.body.email,
            phone: req.body.phone,
            designation: req.body.designation,
            password: hashed
        });
        res.send({ newStudent });
    } catch (error) {
        res.status(400).send({ error: error });
    }
}

module.exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find the user by email
    const user = await Users.findOne({ email });

    // If the user does not exist, return an error
    if (!user) {
      return res.status(401).json({ err: 'Wrong Email' });
    }

    // Check if the password is correct
    const isMatch = await bcrypt.compare(password, user.password);

    // If the password is incorrect, return an error
    if (!isMatch) {
      return res.status(401).json({ err: 'Wrong email or password' });
    }

    res.status(200).json({
      message: "Login Successful",
      user,
    })
    // If the email and password match, generate a JWT
    const token = jwt.sign({ _id: staff._id }, process.env.JWT_SECRET);

    // Save the JWT in a cookie and return a success message
    res.cookie('jwt', token, { httpOnly: true });
    res.json({ message: 'Logged in successfully' });
    
  } catch (error) {
    console.error(error);
    res.status(500).json({ err: 'Server error' });
  }
};


// logout
module.exports.logout = async (req, res) => {
  res.clearCookie("access_token", {
    sameSite:"none",
    secure:true
  }).status(200).json("User has been logged out");
};

// Get all users
module.exports.getUsers = async (req, res) => {
    try {
        const users = await Users.find({});
        res.send({ users });
    } catch (err) {
        res.status(400).send({error: err});
    }
};

// get user by id
router.get('/:id', async (req, res) => {
    try {
        const user = await Users.findById(req.params.id);
        res.send({ user });
    } catch (error) {
        res.status(404).send({ message: `User ${id} is not found` });
    }
});



// // @route PUT /api/users/:id
// // @desc update the user
// // @access public
// router.put('/:id', async (req, res) => {
//     try {
//         const updatedUser = await Users.findByIdAndUpdate(req.params.id, req.body);
//         res.send({ message: 'The User was updated' });
//     } catch (error) {
//         res.status(400).send({ error: error });
//     }
// });

// // @route   DELETE /api/users/:id
// // @desc    delete a student
// // @access  Public
// router.delete('/:id', async (req, res) => {
//     try {
//         const removeUser = await Users.findByIdAndRemove(req.params.id);
//         res.send({ message: 'The user was removed' });
//     } catch (error) {
//         res.status(400).send({ error: error });
//     }
// });