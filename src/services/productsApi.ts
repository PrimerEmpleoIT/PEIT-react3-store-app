import { ApiResponse } from "apisauce";
import { baseApi } from "./api";

const getProducts = async () => {
  try {
    const response: ApiResponse<any> = await baseApi.get("/products/");
    if (!response.ok) {
      throw new Error(response.problem);
    }
    return response.data;
  } catch (error) {
    return { kind: "bad-data", error };
  }
};

export const productsApi = {
  getProducts,
};
