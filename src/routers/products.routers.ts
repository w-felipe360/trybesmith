import express from 'express';
import productsControllers from '../controllers';

const productsRouter = express.Router();

productsRouter.post('/', productsControllers.insertNewProduct);

productsRouter.get('/', productsControllers.getAll);

export default productsRouter;