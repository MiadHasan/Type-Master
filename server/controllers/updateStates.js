import User from '../modals/user.js';

export const updateStates = async (req, res) => {
  try {
    console.log(req.body);
    const user = await User.findOne({email: req.body.email}).exec();
    console.log(user);
    const newTotal = user.total + 1;
    const newWpm = Math.ceil(user.wpm * user.total / newTotal + req.body.wpm / newTotal);
    const newAccuracy = Math.ceil(user.accuracy * user.total / newTotal + req.body.accuracy / newTotal);
    const newBest = user.best > req.body.wpm ? user.best : req.body.wpm
    const updatedStates = await User.findByIdAndUpdate(user._id, {wpm: newWpm, total: newTotal, accuracy: newAccuracy, best: newBest}, {new: true});

    res.status(200).send(updatedStates);
  } catch (error) {
    console.log(error);
  }
};