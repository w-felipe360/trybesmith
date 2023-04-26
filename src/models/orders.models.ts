import { RowDataPacket } from 'mysql2';
import connection from './connection';

const getAll = async () => {
  const [data] = await connection.execute<RowDataPacket[]>(`
      SELECT b.id, 
             b.user_id AS userId, 
             JSON_ARRAYAGG(c.id) AS productsIds 
        FROM Trybesmith.orders AS b 
        JOIN Trybesmith.products AS c ON c.order_id = b.id 
       GROUP BY b.id;
    `);
  return data;
};

export default getAll;