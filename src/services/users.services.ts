import usersModel from '../models/users.model';
import { Users } from '../interface/users.intercace';
import generateToken from '../utils/auth';

const insertNewUser = async (user: Users) => {
  await usersModel.insertUser(user);
  const token = generateToken(user);
  return token;
};
// async function getAll() {
//   const users = await productsModel.getAll();
//   return users;
// }
export default { insertNewUser,
};