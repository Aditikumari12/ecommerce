import React from "react";
import ProductList from "./components/ProductList";
import ProductDetails from "./components/ProductDetails";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route path = "/" element={<ProductList/>}/>
        <Route path = "productDetails/:id" element={<ProductDetails/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
