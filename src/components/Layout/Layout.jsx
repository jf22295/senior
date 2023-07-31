import Header from "./Header";
import Footer from "./Footer";
import "./layout.css";
import CartDrawer from "../Cart/CartDrawer";
import { useState } from "react";

const Layout = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <>
      <div>
        <Header setIsCartOpen={setIsCartOpen} />
        <div>{children}</div>
        <Footer />
      </div>
      <CartDrawer state={isCartOpen} setState={setIsCartOpen} />
    </>
  );
};

export default Layout;
