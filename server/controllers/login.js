import User from '../modals/user.js';

export const loginUser = async (req, res) => {
  try {
    const user = await User.findOne({email: req.body.email, password: req.body.password}).exec();
    if (!user) throw new Error('Invalid email or password!');
    res.send(user)
  } catch (error) {
    res.status(400).send("error");
    console.log(error);
  }
};