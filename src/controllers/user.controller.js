const HttpStatus = require('http-status-codes');
const UserModel = require('../models/user.model');
const UserService = require('../services/user.service')(UserModel);

const getAll = async (req, res, next) => {
  try {
    const result = await UserService.getAll();
    res.status(HttpStatus.CREATED).json(result);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getAll,
};
