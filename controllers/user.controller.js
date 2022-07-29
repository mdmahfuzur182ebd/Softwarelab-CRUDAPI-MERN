
const { v4: uuidv4 } = require("uuid");

const User = require("../models/user.models");

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const getOneUser = async (req, res) => {
  try {
    const user = await User.findOne({ id: req.params.id });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const createUser = async (req, res) => {
  try {
    const newUser = new User({
      id: uuidv4(),
      NurseName: req.body.NurseName,
      HospitalName: req.body.HospitalName,
      Location: req.body.Location,
      NurseNid: req.body.NurseNid,
      Gender: req.body.Gender,
      Address: req.body.Address,
      ContactNumber: req.body.ContactNumber,
      DateofBirth: req.body.DateofBirth,
    });
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const updateUser = async (req, res) => {
  try {
    const user = await User.findOne({ id: req.params.id });
    user.NurseName = req.body.NurseName;
    user.HospitalName = req.body.HospitalName;
    user.Location = req.body.Location;
    user.NurseNid = req.body.NurseNid;
    user.Gender = req.body.Gender;
    user.Address = req.body.Address;
    user.ContactNumber = req.body.ContactNumber;
    user.DateofBirth = req.body.DateofBirth;
    
    await user.save();
    res.status(200).json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const deleteUser = async (req, res) => {
  try {
    await User.deleteOne({ id: req.params.id });
    res.status(200).json({ message: "user is deleted" });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = {
  getAllUsers,
  getOneUser,
  createUser,
  updateUser,
  deleteUser,
};


