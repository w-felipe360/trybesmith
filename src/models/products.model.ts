import { RowDataPacket, ResultSetHeader } from 'mysql2';
import connection from './connection';
import { MyProducts } from '../interface/product.interface';

// interface NewProduct {
//   name: string,
//   amount: string,
// }
async function getAll(): Promise<MyProducts[]> {
  const [rows] = await connection.execute<RowDataPacket[]>('SELECT * FROM Trybesmith.products;');
  return rows as MyProducts[];
}

const insertProducts = async (product: MyProducts) => {
  const [productData] = await connection.execute<ResultSetHeader>(
    `INSERT INTO Trybesmith.products (name, amount)
     VALUES (?, ?)`,
    [product.name, product.amount],
  );
  return productData;
};

export default {
  getAll,
  insertProducts,
};