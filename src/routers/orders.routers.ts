import express from 'express';
import orders from '../controllers/orders.controllers';

const ordersRouter = express.Router();

ordersRouter.get('/', orders);

export default ordersRouter;