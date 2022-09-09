// MODELS
const { User } = require('../models/user');

// SERVICES
const userService = require('./user.services');

const createUser = async (email, password) => {
  try {
    // check email does not exist
    if (await User.emailTaken(email)) {
      throw new Error('Sorry email taken');
    }
    // add user to db (hash password)
    const user = new User({
      email,
      password,
    });
    await user.save();
    return user;
  } catch (error) {
    throw error;
  }
};
const genAuthToken = async (user) => {
  const token = user.generateAuthToken();
  return token;
};

const signInWithEmailAndPassword = async (email, password) => {
  try {
    const user = await userService.findUserByEmail(email);
    if (!user) {
      throw new Error('Sorry bad email');
    }

    if (!(await user.comparePasswords(password))) {
      throw new Error('Sorry bad password');
    }
    return user;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  createUser,
  genAuthToken,
  signInWithEmailAndPassword,
};
