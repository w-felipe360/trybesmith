import getAll from '../models/orders.models';

const getAllOrders = async () => {
  const orders = await getAll();
  return orders;
};

export default getAllOrders;