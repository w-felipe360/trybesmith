import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import { Users } from '../interface/users.intercace';

const insertUser = async (user: Users) => {
  const [data] = await connection.execute<ResultSetHeader>(
    `INSERT INTO Trybesmith.users (username, vocation, level, password)
       VALUES (?, ?, ?, ?)`,
    [user.username, user.vocation, user.level, user.password],
  );
  return data;
};
  
export default { 
  insertUser, 
};