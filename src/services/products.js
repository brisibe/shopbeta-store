import http from "../http-common";
import authHeader from "../helper/auth-header";

class ProductsDataService {
  getAll() {
    return http.get("/products");
  }

  getSingle(id) {
    return http.get(`/products/${id}`);
  }

  create(product) {
    let data = new FormData();
    data.append("photo", product.photo);
    data.append("name", product.name);
    data.append("category", product.category);
    data.append("description", product.description);
    data.append("price", product.price);

    const user = JSON.parse(localStorage.getItem("user"));

    return http.post(`/products`, data, {
      headers: {
        Authorization: "Bearer " + user.token,
        "Content-Type": "application/json",
      },
    });
  }

  delete(id) {
    return http.delete(`/products/${id}`, { headers: authHeader() });
  }
}

export default new ProductsDataService();
