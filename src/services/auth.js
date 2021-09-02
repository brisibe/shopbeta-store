import http from "../http-common";

class AuthService {
  login(email, password) {
    const cred = JSON.stringify({ email, password });
    return http.post("/auth/login", cred).then((res) => {
      if (res.data.token) {
        localStorage.setItem("user", JSON.stringify(res.data));

        return res;
      }
    });
  }

  registerBuyer(buyer) {
    return http.post("/auth/register/buyer", buyer);
  }

  registerSeller(seller) {
    return http.post("/auth/register/seller", seller);
  }

  logout() {
    localStorage.removeItem("user");
  }
}

export default new AuthService();
