import jwt from 'jsonwebtoken';
import asyncHandler from './asyncHandler.js';
import User from '../models/userModel.js';

const protect = asyncHandler(async (req, res, next) => {
  let token;

  token = req.cookies.jwt;

  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      req.user = await User.findByPk(decoded.userId, {
        attributes: { exclude: ['password'] },
      });

      next();
    } catch (error) {
      console.error(error);
      res.status(401);
      throw new Error('Token incorreto');
    }
  } else {
    res.status(401);
    throw new Error('Não autorizado');
  }
});

const admin = (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    next();
  } else {
    res.status(401);
    throw new Error('Não é um usuário administrador');
  }
};

export { protect, admin };