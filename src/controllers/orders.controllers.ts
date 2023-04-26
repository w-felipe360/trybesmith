import { Request, Response } from 'express';
import getAllOrders from '../services/orders.services';

const getAll = async (req: Request, res: Response) => {
  const result = await getAllOrders();
  return res.status(200).json(result);
};

export default getAll;