const { StatusCodes } = require('http-status-codes');
const teamServices = require('../services/team');

// não precisa do next por conta do rescue
const getAll = async (_req, res) => {
  const teams = await teamServices.getAll();
  return res.status(StatusCodes.OK).json(teams);
};

module.exports = {
  getAll,
};
