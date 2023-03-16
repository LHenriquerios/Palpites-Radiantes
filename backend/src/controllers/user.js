const { StatusCodes } = require('http-status-codes');
const userServices = require('../services/user');

const getAll = async (_req, res) => {
  const users = await userServices.getAll();
  return res.status(StatusCodes.OK).json(users);
};

module.exports = {
  getAll,
};
