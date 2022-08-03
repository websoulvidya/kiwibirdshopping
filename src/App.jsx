import {BrowserRouter, Routes,Route } from 'react-router-dom'
import './App.css';
import Home from "./pages/Home"
import Register from './pages/Register';
import Login from './pages/Login';
import Cart from './pages/Cart';
import ProductList from './pages/ProductList';
import ProductDetail from './pages/ProductDetail';


function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route exact path="/" element={<Home />} />
   <Route path="/register" element={<Register />} />
   <Route path="/login" element={<Login />} />
   <Route path="/cart" element={<Cart />} />
   <Route path="/products" element={<ProductList />} />
   <Route path="/details" element={<ProductDetail />} />
    </Routes>
   
    </BrowserRouter>
  );
}

export default App;
