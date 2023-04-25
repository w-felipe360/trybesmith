import productsModel from '../models';
import { MyProducts } from '../interface/product.interface';
// const writeNewProduct = async (name: string, amount: string): Promise<string> => {
//   const newProduct: string = await productsModel.insertProducts(name, amount);
//   return newProduct;
// };
const insertNewProduct = async (product: MyProducts) => {
  const productData = await productsModel.insertProducts(product);
  return {
    id: productData.insertId,
    ...product,
  };
};
 
export default { insertNewProduct };