import prisma from '../config/db';
import bcrypt from 'bcryptjs';
import { generateToken } from '../utils/generateToken';

export const signup = async (name: string, email: string, password: string) => {
  const existing = await prisma.user.findUnique({ where: { email } });
  if (existing) {
    const error = new Error('Email already in use');
    (error as any).status = 409;
    throw error;
  }

  const hashed = await bcrypt.hash(password, 10);
  const user = await prisma.user.create({
    data: { name, email, password: hashed }
  });

  const token = generateToken(user.id);
  return { user, token };
};

export const login = async (email: string, password: string) => {
  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) {
    const error = new Error('Invalid credentials');
    (error as any).status = 401;
    throw error;
  }

  const match = await bcrypt.compare(password, user.password);
  if (!match) {
    const error = new Error('Invalid credentials');
    (error as any).status = 401;
    throw error;
  }

  const token = generateToken(user.id);
  return { user, token };
};
