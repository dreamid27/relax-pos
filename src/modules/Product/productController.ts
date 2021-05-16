import { ProductServices } from "../../services/connector";
import { ApolloError } from "apollo-server";

export interface IProductView {
  name: string;
  price: string;
}

export const createProduct = async (
  _: any,
  data: any
): Promise<IProductView> => {
  try {
    const product = await ProductServices.addProduct({
      name: data.name,
      price: data.price,
    });

    return product;
  } catch (err) {
    throw new ApolloError("Ehh error", "MY_ERROR_CODE");
  }
};

export const getProducts = async (): Promise<IProductView[]> => {
  try {
    const products = await ProductServices.getProducts();
    return products;
  } catch (err) {
    throw new ApolloError("Ehh si ajig", "MY_ERROR_CODE");
  }
};

export default {
  createProduct,
  getProducts,
};
