const express = require("express");
const router = express.Router();

const { registerUser, loginUser, getUsers } = require("../controllers/user.js");

router.post('/registerUser', registerUser);
router.post('/loginUser', loginUser);
router.get('/getUsers', getUsers);

module.exports = router;
