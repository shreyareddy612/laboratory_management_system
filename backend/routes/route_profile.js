const express = require('express');
const profileRouter = express.Router();

const { createProfile, getProfileById, updateProfile } = require("../controllers/profile.js");

profileRouter.post('/createProfile', createProfile);
profileRouter.get('/getProfileById/:id', getProfileById);
profileRouter.put('/updateProfile/:id', updateProfile);


export default profileRouter;
