import {
  applySnapshot,
  getSnapshot,
  Instance,
  SnapshotOut,
  types,
} from "mobx-state-tree";
import { createCartDefaultModel } from "./CartStore";

export const resetStore = (self: any) => {
  // TODO: fix anys
  let initialState: any;
  return {
    afterCreate() {
      initialState = getSnapshot(self);
    },
    resetStore() {
      applySnapshot(self, initialState);
    },
  };
};

export const RootStoreModel = types
  .model("RootStore")
  .props({
    cartStore: types.optional(createCartDefaultModel(), {}),
  })
  .actions(resetStore);

export const rootStore = RootStoreModel.create();

export type RootStore = Instance<typeof RootStoreModel>;
export type RootStoreSnapshot = SnapshotOut<typeof RootStoreModel>;
