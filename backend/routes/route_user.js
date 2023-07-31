const express = require("express");
const router = express.Router();

const { 
    registerUser,
    loginUser,
    getUsers,
    getUserById,
    getUserByEmail } = require("../controllers/user.js");

router.post('/registerUser/', registerUser);
router.post('/loginUser', loginUser);
router.get('/getUsers', getUsers);
router.get('/getUserById/:id', getUserById);
router.get('/getUserByEmail/:email', getUserByEmail);

module.exports = router;

