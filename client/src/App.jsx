import { Routes, Route } from "react-router";
import Nav from "./components/Nav/Nav";
import Login from "./page/AuthPage/Login";
import Register from "./page/AuthPage/Register";
import HomePage from "./page/HomePage/HomePage";
import ProductPage from "./page/ProductPage/ProductPage";
// import CartPage from "./page/CartPage/CartPage";
import CartContainer from "./page/CartPage/CartContainer";
import ProductView from "./components/Product/ProductView";

function App() {

  
  return (
    <>
      <Nav/>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={ <Register/>} />
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductPage />} />
        {/* <Route path="/cart" element={<CartPage />} /> */}
        <Route path="/cart" element={<CartContainer />} />
        <Route path="/product/:id" element={<ProductView />} />
      </Routes>
    </>
  );
}

export default App;
