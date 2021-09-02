import { Switch, Redirect } from "react-router-dom";
import Login from "./views/Login";
import Register from "./views/Register";
import Home from "./views/Home";
import ResetPassword from "./views/ResetPassword";
import SearchPage from "./views/SearchPage";
import Category from "./views/Category";
import { RouteWithLayout } from "./components/RouteWithLayout/RouteWithLayout";
import Profile from "./views/Profile";
import SellerProfile from "./views/SellerProfile";
import SellerRegistrations from "./views/SellerRegistrations";
import CartPage from "./views/CartPage";
import { Checkout } from "./views/Checkout";
import ProductPage from "./views/ProductPage";
import { Profiler } from "react";
import { connect } from "react-redux";

function App() {
  return (
    <Profiler id="app">
      <Switch>
        <RouteWithLayout path="/" withSidebar={true} exact>
          <Home />
        </RouteWithLayout>

        <RouteWithLayout path="/search" withSidebar={true}>
          <SearchPage />
        </RouteWithLayout>

        <RouteWithLayout path="/category/:name" withSidebar={true}>
          <Category />
        </RouteWithLayout>

        <RouteWithLayout path="/login" withSidebar={false}>
          <Login />
        </RouteWithLayout>

        <RouteWithLayout path="/register" exact withSidebar={false}>
          <Register />
        </RouteWithLayout>

        <Redirect from="/logout" to="/" />

        <RouteWithLayout path="/reset" withSidebar={false}>
          <ResetPassword />
        </RouteWithLayout>
        <RouteWithLayout path="/customer" withSidebar={false}>
          <Profile />
        </RouteWithLayout>
        <RouteWithLayout path="/seller" withSidebar={false}>
          <SellerProfile />
        </RouteWithLayout>
        <RouteWithLayout path="/register/seller" withSidebar={false} exact>
          <SellerRegistrations />
        </RouteWithLayout>
        <RouteWithLayout path="/cart" withSidebar={false}>
          <CartPage />
        </RouteWithLayout>
        <RouteWithLayout path="/checkout" withSidebar={false}>
          <Checkout />
        </RouteWithLayout>
        <RouteWithLayout path="/:productName" withSidebar={false}>
          <ProductPage />
        </RouteWithLayout>
      </Switch>
    </Profiler>
  );
}

const mapStateToProps = (state) => ({
  isLoggedIn: state.auth.isLoggedIn,
});

export default connect(mapStateToProps)(App);
