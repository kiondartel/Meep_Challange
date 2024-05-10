import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../components/Layout";
import NavBar from "../components/Navbar";

const RoutesConfig = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Layout />}>
          {/*  <Route index element={<Products />} />
          <Route path="product/:id" element={<ProductDetail />} />
          <Route path="cart" element={<ShoppingCart />} />
   <Route path="confirm" element={<OrderConfirmation />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesConfig;
