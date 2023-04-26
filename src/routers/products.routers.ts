import express from 'express';
import productsControllers from '../controllers';

const productsRouter = express.Router();

productsRouter.post('/', productsControllers.productsControllers.insertNewProduct);

productsRouter.get('/', productsControllers.productsControllers.getAll);

export default productsRouter;