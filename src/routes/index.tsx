import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../components/Layout";
import ProductShow from "../modules/Products/page";
import ProductDetail from "../modules/ProductSpecs/page";

const RoutesConfig = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<ProductShow />} />
          <Route path="product/:id" element={<ProductDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesConfig;
