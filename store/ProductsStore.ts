/* eslint-disable no-param-reassign */
import { types, Instance, SnapshotOut } from "mobx-state-tree";
import { productsApi } from "../src/services/productsApi";
import toast from '../components/toast';

const Product = types.model("Product").props({
  category: types.maybeNull(types.number),
  created_at: types.string,
  description: types.string,
  details: types.string,
  id: types.number,
  images: types.string,
  price: types.string,
  specs: types.maybeNull(types.map(types.union(types.string, types.number))),
  stock: types.number,
  title: types.string,
});

export const ProductsStore = types
  .model("Products")
  .props({
    products: types.array(Product),
    lastUpdate: types.Date,
  })
  .views((self) => ({
    productsFromCart(cart: { productId: number; quantity: number }[]) {
      return self.products.filter((product) =>
        cart.some((item) => item.productId === product.id)
      );
    },
    productsByCategory(categoryId: number) {
      return self.products.filter((product) => product.category === categoryId);
    }
  }))
  .actions((self) => {
    function updateProducts(products: any) {
      self.products = products;
      self.lastUpdate = new Date();
    }
    return {
      updateProducts,
    };
  })
  .actions((self) => ({
    getProducts: async () => {
      const response = await productsApi.getProducts();
      if (!response.kind) {
        self.updateProducts(response);
      } else {
        if (!self.products.length) {
          toast.warning("There was a problem loading the products. Reload the page please");
        }
      }
    },
  }));

type ProductsStoreType = Instance<typeof ProductsStore>;
export type Products = ProductsStoreType;
type ProductsSnapshotType = SnapshotOut<typeof ProductsStore>;
export type ProductsSnapshot = ProductsSnapshotType;
export const createProductsDefaultModel = () =>
  types.optional(ProductsStore, {
    products: [],
    lastUpdate: new Date(0),
  });
