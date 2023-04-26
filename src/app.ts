import express from 'express';
import productsRouter from './routers/products.routers';
import usersRouter from './routers/users.routers';

const app = express();

app.use(express.json());

app.use('/products', productsRouter);
app.use('/users', usersRouter);
export default app;
