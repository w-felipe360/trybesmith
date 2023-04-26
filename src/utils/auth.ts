import jwt, { SignOptions } from 'jsonwebtoken';
import { Users } from '../interface/users.intercace';

const secretKey = process.env.JWT_SECRET || 'a';
const configJWT = { 
  expiresIn: '1d',
  algorithm: 'HS256',
} as SignOptions;
const generateToken = (payload: Users) => {
  const token = jwt.sign(payload, secretKey, configJWT);
  return token;
};

export default generateToken;