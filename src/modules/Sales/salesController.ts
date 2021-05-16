import { SalesServices } from "../../services/connector";
import { ApolloError } from "apollo-server";

export interface ISalesDetail {
  name: string;
  price: number;
}

export interface ISalesView {
  customerName: string;
  orderDate: string;
  details: ISalesDetail[];
  total: number;
}

export const createSales = async (root: any, data: any) => {
  try {
    const sales = await SalesServices.addSales({
      customerName: data.customerName,
      details: [
        { name: "Kambing Jantan", price: 200000 },
        { name: "Kambing Betina", price: 100000 },
      ],
      total: data.total,
      orderDate: data.orderDate,
    });
    return sales;
  } catch (error) {
    throw new ApolloError("Ehh Error", "MY_ERROR_CODE");
  }
};

export default {
  createSales,
};
