import { http } from "utils/jsonplaceholderHttp";

/**
 * JSONPlaceholder API
 */
export const jsonplaceholderHttp = {
  getPosts: () => http.get("/posts"),
};
