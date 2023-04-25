import { Request, Response } from 'express';
import productsServices from '../services';
import { MyProducts } from '../interface/product.interface';

const insertNewProduct = async (req: Request, res: Response) => {
  const product: MyProducts = req.body;
  const products = await productsServices.insertNewProduct(product);
  return res.status(201).json(products);
};

export default {
  insertNewProduct,
};