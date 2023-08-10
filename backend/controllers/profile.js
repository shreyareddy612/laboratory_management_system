const express = require('express');
const Profile = require("../models/profile");
const { model } = require('mongoose');

module.exports.createProfile = async (req, res) => {
    try {
        const newProfile = await Profile.create({
            description: req.body.description,
            sex: req.body.sex,
            disabled: req.body.disabled,
            marital_status: req.body.marital_status,
            children: req.body.children,
            blood_group: req.body.blood_group,
            work_at: req.body.work_at,
            work: req.body.work,
            next_of_kin: req.body.next_of_kin,
            next_of_kin_rel: req.body.next_of_kin_rel,
            next_of_kin_contact: req.body.next_of_kin_contact,
            user_id: req.body.user
        });
    } catch (error) {
        res.status(400).send({ error: error });   
    }
}

model.exports.getProfileById = async (req, res) => {
    try {
        const userId = req.params;

        const userProfile = await Profile.findOne({ user_id: userId });

        res.send({ userProfile });
    } catch (error) {
        res.status(400).send({ error: error });
    }
}

module.exports.updateProfile = async (req, res) => {
    try {
        const userId = req.params.userId; // Assuming you're passing the userId as a parameter

        const updatedProfile = await Profile.findOneAndUpdate(
            { user_id: userId },
            {
                $set: {
                    description: req.body.description,
                    sex: req.body.sex,
                    disabled: req.body.disabled,
                    marital_status: req.body.marital_status,
                    children: req.body.children,
                    blood_group: req.body.blood_group,
                    work_at: req.body.work_at,
                    work: req.body.work,
                    next_of_kin: req.body.next_of_kin,
                    next_of_kin_rel: req.body.next_of_kin_rel,
                    next_of_kin_contact: req.body.next_of_kin_contact,
                },
            },
            { new: true } // This option returns the updated document
        );

        res.send({ updatedProfile });
    } catch (error) {
        res.status(400).send({ error: error });
    }
};

