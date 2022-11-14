export type ProductType = {
  category: number | null;
  created_at: string;
  description: string;
  details: string;
  id: number;
  images: string;
  price: string;
  specs: { [key: string]: string | number } | null;
  stock: number;
  title: string;
};
