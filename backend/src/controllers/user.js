const { StatusCodes } = require('http-status-codes');
const userService = require('../services/user');

// não precisa do next por conta do rescue
const getAll = async (_req, res) => {
  const users = await userService.getAll();
  return res.status(StatusCodes.OK).json(users);
};

const getById = async (req, res) => {
  const user = await userService.getById(req.params.id);
  return res.status(StatusCodes.OK).json(user);
};

const createUser = async (req, res) => {
  const user = await userService.createUser(req.body);
  return res.status(StatusCodes.CREATED).json(user);
};

const updateUser = async (req, res) => {
  const user = await userService.updateUser(req.params.id, req.body);
  return res.status(StatusCodes.OK).json(user);
};

const deleteUser = async (req, res) => {
  await userService.deleteUser(req.params.id);
  return res.status(StatusCodes.NO_CONTENT).json(true);
};

module.exports = {
  getAll,
  getById,
  createUser,
  updateUser,
  deleteUser
};
