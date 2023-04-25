import { Request, Response } from 'express';
import productsServices from '../services';
import { MyProducts } from '../interface/product.interface';

const insertNewProduct = async (req: Request, res: Response) => {
  const products: MyProducts = req.body;
  const result = await productsServices.insertNewProduct(products);
  return res.status(201).json(result);
};

async function getAll(req: Request, res: Response) {
  const products = await productsServices.getAll();
  return res.json(products);
}
export default {
  insertNewProduct,
  getAll,
};