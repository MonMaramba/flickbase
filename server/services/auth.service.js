const { User } = require('../models/user');

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

module.exports = {
  createUser,
};
