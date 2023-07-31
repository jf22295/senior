import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Layout from "./components/Layout/Layout";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import PasswordRequest from "./pages/PasswordRequest/PasswordRequest";
import PasswordConfirm from "./pages/PasswordConfirm/PasswordConfirm";
import Profile from "./pages/Profile/Profile";
import Addresses from "./pages/Addresses/Addresses";
import CreateAddress from "./pages/Addresses/CreateAddress";
import EditAddress from "./pages/Addresses/EditAddress";
import Order from "./pages/Order/Order";
import OrderDetails from "./pages/Order/OrderDetails";
import DeliveryHome from "./pages/Delivery/DeliveryHome";
import DeliveryRestaurant from "./pages/Delivery/DeliveryRestaurant";
import DeliveryProduct from "./pages/Delivery/DeliveryProduct";
import ReservationHome from "./pages/Reservation/ReservationHome";
import ReservationRestaurant from "./pages/Reservation/ReservationRestaurant";
import Category from "./pages/Category/Category";
import Proceed from "./pages/Proceed/Proceed";
import ProceedPay from "./pages/Proceed/ProceedPay";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <Home />
          </Layout>
        }
      />
      <Route
        path="/login"
        element={
          <Layout>
            <Login />
          </Layout>
        }
      />
      <Route
        path="/register"
        element={
          <Layout>
            <Register />
          </Layout>
        }
      />
      <Route
        path="/password/request"
        element={
          <Layout>
            <PasswordRequest />
          </Layout>
        }
      />
      <Route
        path="/password/confirm"
        element={
          <Layout>
            <PasswordConfirm />
          </Layout>
        }
      />
      <Route
        path="/profile"
        element={
          <Layout>
            <Profile />
          </Layout>
        }
      />
      <Route
        path="/address"
        element={
          <Layout>
            <Addresses />
          </Layout>
        }
      />
      <Route
        path="/address/new"
        element={
          <Layout>
            <CreateAddress />
          </Layout>
        }
      />
      <Route
        path="/address/edit/:addressId"
        element={
          <Layout>
            <EditAddress />
          </Layout>
        }
      />
      <Route
        path="/order"
        element={
          <Layout>
            <Order />
          </Layout>
        }
      />
      <Route
        path="/order/:orderId"
        element={
          <Layout>
            <OrderDetails />
          </Layout>
        }
      />
      <Route
        path="/delivery"
        element={
          <Layout>
            <DeliveryHome />
          </Layout>
        }
      />
      <Route
        path="/delivery/category/:categoryId"
        element={
          <Layout>
            <Category type="DELIVERY" />
          </Layout>
        }
      />
      <Route
        path="/delivery/restaurant/:restaurantId"
        element={
          <Layout>
            <DeliveryRestaurant />
          </Layout>
        }
      />
      <Route
        path="/delivery/restaurant/:restaurantId/product/:productId"
        element={
          <Layout>
            <DeliveryProduct />
          </Layout>
        }
      />
      <Route
        path="/reservation"
        element={
          <Layout>
            <ReservationHome />
          </Layout>
        }
      />
      <Route
        path="/reservation/category/:categoryId"
        element={
          <Layout>
            <Category type="RESERVATION" />
          </Layout>
        }
      />
      <Route
        path="/reservation/restaurant/:restaurantId"
        element={
          <Layout>
            <ReservationRestaurant />
          </Layout>
        }
      />
      <Route
        path="/proceed"
        element={
          <Layout>
            <Proceed />
          </Layout>
        }
      />
      <Route
        path="/proceed/pay"
        element={
          <Layout>
            <ProceedPay />
          </Layout>
        }
      />
    </Routes>
  );
}

export default App;
