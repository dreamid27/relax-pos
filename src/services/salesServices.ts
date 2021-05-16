import Sales, { ISales } from "../model/salesModel";

export interface ISalesDetail {
  name: string;
  price: number;
}

export interface ISalesServices {
  customerName: string;
  orderDate: string;
  details: ISalesDetail[];
  total: number;
}

export const addSales = async (obj: ISalesServices): Promise<ISales> => {
  try {
    const sales: ISales = await Sales.create({
      customerName: obj.customerName,
      orderDate: obj.orderDate,
      details: obj.details,
      total: obj.total,
    });
    return sales;
  } catch (err) {
    throw err;
  }
};

export default {
  addSales,
};
