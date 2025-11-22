import jwt from 'jsonwebtoken';

export const generateToken = (userId: string) => {
  const secret = process.env.JWT_SECRET as string;
  const expiresIn = process.env.JWT_EXPIRES_IN || '7d';

  return jwt.sign({ userId }, secret, { expiresIn });
};
