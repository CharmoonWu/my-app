import { http } from "utils/jsonplaceholderHttp";

/**
 * JSONPlaceholder API
 */
export const jsonplaceholderHttp = {
  getPosts: () => http.get("/posts"),
  getComments: (params: any) => http.get(`/comments`, { params }),
};
