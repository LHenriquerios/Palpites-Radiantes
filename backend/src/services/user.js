const { StatusCodes } = require('http-status-codes');
const { User } = require('../database/models');

const getAll = async () => User.findAll();

const getById = async (id) => User.findByPk(id);

const createUser = async (payload) => {
  const { username } = payload;
  const user = await User.findOne({ where: { username } });
  if (user) {
    const error = { status: StatusCodes.CONFLICT, message: 'User already registered' };
    throw error;
  }
  const createdUser = await User.create(payload);
  return createdUser;
};

const updateUser = async (id, payload) => {
  const { username, email, password, points } = payload;
  const [userUpdated] = await User.update({ username, email, password, points }, { where: { id } });
  if (!userUpdated) {
    const error = { status: StatusCodes.NOT_FOUND, message: 'Not Found or equal' };
    throw error;
  }

  return getById(id);
};

const deleteUser = async (id) => {
  const user = await getById(id);
  if (!user) {
    const error = { status: StatusCodes.NOT_FOUND, message: 'User does not exist' };
    throw error;
  }

  await user.destroy();
};


module.exports = {
  getAll,
  getById,
  createUser,
  updateUser,
  deleteUser
};
