import axios from "axios";

export default axios.create({
  baseURL: "https://shopbeta-server.azurewebsites.net/api",
  headers: {
    "Content-type": "application/json",
  },
});
