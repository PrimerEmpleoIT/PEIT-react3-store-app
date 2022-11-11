import { ProductType } from "./products";

export type CategoryType = {
  id: number;
  name: string;
  products: ProductType[];
};
