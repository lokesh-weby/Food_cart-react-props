
import Home from "./home.jsx";
import Navigation from "./navigation.jsx";
import Cart from "./cart.jsx";
import Error from "./error.jsx"
import { BrowserRouter,Route,Routes } from "react-router-dom";
import { useState } from "react";
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
function App() {
  const [cartItem,setCartItem]=useState([]);
  const [count,setCount]=useState(0);
  const [total,setTotal]=useState(0);
  return (
  <BrowserRouter >
  <Navigation length={count}/>
  <Routes>
     <Route path='/' element={<Home cart={cartItem} setcart={setCartItem} setLength={setCount} length={count}/>}/>  
      <Route path='/cart' element={<Cart cart={cartItem} setcart={setCartItem} setLength={setCount} length={count} tot={total} setTot={setTotal} />}/>       
      <Route path="*" element={<Error/>}/> 
  </Routes>
  <ToastContainer/>
  </BrowserRouter>
 
  );
}

export default App;
