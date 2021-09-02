import { combineReducers } from "redux";
import alert from "./alert";
import cart from "./cart";
import auth from "./auth";
import products from "./products";

export default combineReducers({ alert, cart, products, auth });
