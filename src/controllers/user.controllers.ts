import { Request, Response } from 'express';
import usersServices from '../services/users.services';
import { Users } from '../interface/users.intercace';

const insertUser = async (req: Request, res: Response) => {
  const users: Users = req.body;
  const result = await usersServices.insertNewUser(users);
  return res.status(201).json({ token: result });
};

export default {
  insertUser,
};