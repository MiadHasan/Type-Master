import User from "../modals/user.js";

export const signup = (req, res) => {
  res.send('this works!');
};

export const createUser = async (req, res) => {
  const user = req.body;
  console.log('got request');
  const newUser = new User(user);
  try {
    await newUser.save();

    res.status(201).json(newUser);
  } catch (error) {
    res.status(409).json({error: error})
  }
};