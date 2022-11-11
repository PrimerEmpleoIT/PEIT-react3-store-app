export type ProductType = {
  category: number;
  created_at: string;
  description: string;
  details: string;
  id: number;
  images: string;
  price: string;
  specs: { [key: string]: string };
  stock: number;
  title: string;
};
