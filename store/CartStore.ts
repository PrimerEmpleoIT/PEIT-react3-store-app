/* eslint-disable no-param-reassign */
import { types, Instance, SnapshotOut } from "mobx-state-tree";
import toast from "../components/toast";

const CartItem = types.model("CartItem").props({
  quantity: types.number,
  productId: types.number,
});

export const CartStore = types
  .model("Cart")
  .props({
    cart: types.array(CartItem),
    price: types.optional(types.number, 0),
  })
  .actions((self) => {
    function addProduct(productId: number) {
      const productIdx = self.cart.findIndex(
        (item) => item.productId === productId
      );
      if (productIdx === -1) {
        self.cart.push({ productId, quantity: 1 });
        toast.success("Product added to cart");
      } else {
        self.cart[productIdx].quantity += 1;
        toast.success("Product quantity updated");
      }
    }

    function removeProduct(productId: number) {
      const productIdx = self.cart.findIndex(
        (item) => item.productId === productId
      );
      if (productIdx !== -1) {
        self.cart.splice(productIdx, 1);
        toast.success("Product removed from cart");
      } else {
        toast.error("Product not found");
      }
    }

    return {
      addProduct,
      removeProduct,
    };
  });

type CartStoreType = Instance<typeof CartStore>;
export type Cart = CartStoreType;
type CartSnapshotType = SnapshotOut<typeof CartStore>;
export type CartSnapshot = CartSnapshotType;
export const createCartDefaultModel = () => types.optional(CartStore, {});
