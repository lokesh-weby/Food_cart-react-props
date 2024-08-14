import React from 'react'
import products from "../foods.json";
import '../css/home.css'
import { useState } from "react";
import {  toast,Bounce } from 'react-toastify';
import { Link } from 'react-router-dom';


const Home = ({cart,setcart,setLength,length}) => {
    const [foods]=useState(products);

    function AddItem(item){
      setLength(cart.length+1);
      setcart([...cart,item]);
      toast.info(`${item.name} added to cart`, {
        position: "bottom-left",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
        });       
    }
   
   
  return (
    <>
    <section className='container'>
       <main className="row hero">
        {foods.map((item) => (
          <div className="col-12 col-sm-6 col-md-4 villan" key={foods.id}>
            <div className="wrapper">
              <div className="img">
                <img src={item.src} alt={item.name}></img>
              </div>
              <div className="details">
                <h3>{item.name}</h3>
                <p>Price ₹{item.rate}/-</p>
                {(cart).includes(item)?
                <Link to={"/cart"} className='added'>Order placed</Link>:
                 <button className="btn btn-primary" onClick={()=>AddItem(item)}>
                  Place Order
                </button>}
               
              </div>
            </div>
          </div>
        ))}
      </main>
      </section>
      <footer>Developed by <a href='https://github.com/lokesh-weby' target='blank'>lokesh-weby</a></footer>
      
    </>
  )
}

export default Home
