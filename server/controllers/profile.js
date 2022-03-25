import User from '../modals/user.js';

export const getStates = async (req, res) => {
  try {
    const states = await User.findOne({email: req.body.email}).exec();
    
    res.status(200).send(states);
  } catch (error) {
    console.log('geterror', error);
  }
};