import Product, { IProduct } from "../model/productModel";

export interface IProductServices {
  name: string;
  price: number;
}

export const addProduct = async (obj: IProductServices): Promise<IProduct> => {
  try {
    const product: IProduct = await Product.create({
      name: obj.name,
      price: obj.price,
    });

    return product;
  } catch (err) {
    console.log(err, "err");
    throw err;
  }
};

export const getProducts = async (): Promise<IProduct[]> => {
  try {
    const products: IProduct[] = await Product.find();
    return products;
  } catch (err) {
    throw err;
  }
};
export default {
  addProduct,
  getProducts,
};
