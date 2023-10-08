import User from '../models/User.js';

export const getUserData = async (req, res, next) => {
  try {
    const userData = await User.find({});
    res.ok({ message: 'SUCCESS', data: userData });
  } catch (err) {
    next(err.message);
  }
};
