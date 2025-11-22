import jwt, { Secret, SignOptions } from "jsonwebtoken";

export const generateToken = (userId: string) => {
  const secret: Secret = process.env.JWT_SECRET as string;
  const expiresIn: any = process.env.JWT_EXPIRES_IN || "7d";

  const options: SignOptions = {
    expiresIn,
  };

  return jwt.sign({ id: userId }, secret, options);
};
