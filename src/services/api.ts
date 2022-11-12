import { create } from "apisauce";

export const baseApi = create({
  baseURL: "https://tech-store-api.onrender.com",
  timeout: 10000,
});
