import express from 'express';
import usersControllers from '../controllers';

const usersRouter = express.Router();

usersRouter.post('/', usersControllers.userControllers.insertUser);

export default usersRouter;