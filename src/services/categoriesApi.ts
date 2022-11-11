import { ApiResponse } from "apisauce";
import { baseApi } from "./api";

const getCategories = async () => {
  try {
    const response: ApiResponse<any> = await baseApi.get("/categories/");
    if (!response.ok) {
      throw new Error(response.problem);
    }
    return response.data;
  } catch (error) {
    return { kind: "bad-data", error };
  }
};

const getCategoryById = async (id: number) => {
  try {
    const response: ApiResponse<any> = await baseApi.get(`/categories/${id}/`);
    if (!response.ok) {
      throw new Error(response.problem);
    }
    return response.data;
  } catch (error) {
    return { kind: "bad-data", error };
  }
};

export const categoriesApi = {
  getCategories,
  getCategoryById,
};
