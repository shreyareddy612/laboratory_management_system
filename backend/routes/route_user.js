const express = require("express");
const router = express.Router();

const { registerUser, loginUser, getUsers, getUserById } = require("../controllers/user.js");

router.post('/registerUser', registerUser);
router.post('/loginUser', loginUser);
router.get('/getUsers', getUsers);
router.get('/getUserById/:id', getUserById);

module.exports = router;
