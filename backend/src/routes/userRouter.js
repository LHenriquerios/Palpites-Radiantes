const express = require('express');
const rescue = require('express-rescue');
const userController = require('../controllers/user');
const userRouter = express.Router();

userRouter.get('/', rescue(userController.getAll));
userRouter.get('/:id', rescue(userController.getById));
userRouter.post('/', rescue(userController.createUser));
userRouter.put('/:id', rescue(userController.updateUser));
userRouter.delete('/:id', rescue(userController.deleteUser));

module.exports = userRouter;