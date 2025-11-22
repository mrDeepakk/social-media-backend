import { Request, Response, NextFunction } from 'express';
import { signup, login } from '../services/auth.service';
import { ApiResponse } from '../utils/ApiResponse';

export const signupHandler = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { name, email, password } = req.body;
    const result = await signup(name, email, password);
    res.status(201).json(new ApiResponse(true, 'User created', result));
  } catch (err) {
    next(err);
  }
};

export const loginHandler = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email, password } = req.body;
    const result = await login(email, password);
    res.json(new ApiResponse(true, 'Logged in', result));
  } catch (err) {
    next(err);
  }
};
