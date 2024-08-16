//eslint-disable-next-line
import React from "react";
import cartmodule from "../css/cart.module.css";
import { Link } from "react-router-dom";

const Viewcart = ({
  cart,
  length,
  setcart,
  setLength,
  tot,
  setTot,
  qty,
  setQty,
}) => {
  //removing the matching element by filtering method
  const remove = (id) => {
    const NewItem = cart.filter((item) => item.id !== id);
    setcart(NewItem);
    setLength(NewItem.length);
  };
  //using reduce method added the total..
  setTot(
    cart.reduce(
      (acc, curr) =>
        acc +
        (isNaN(parseInt(curr.rate * curr.quantity))
          ? 0
          : parseInt(curr.rate * curr.quantity)),
      0
    )
  );

  function decrement(id, originalquantity) {
    setcart((cart) =>
      cart.map((itm) =>
        id === itm.id ? { ...itm, quantity: originalquantity - 1 } : itm
      )
    );
  }
  function increment(id, originalquantity) {
    setQty(qty + 1);
    setcart((cart) =>
      cart.map((itm) =>
        id === itm.id ? { ...itm, quantity: originalquantity + 1 } : itm
      )
    );
  }

  return (
    <>
      <main className="container">
        {length < 1 ? (
          <h1 className="text-center">
            Your Cart is empty<Link to={"/"}> Order something..</Link>
          </h1>
        ) : (
          cart.map((item) => (
            <div className={cartmodule.items} key={item.id}>
              <div className={cartmodule.cartDetails}>
                <img
                  className={cartmodule.img}
                  src={item.src}
                  alt={item.name}
                />
                <h6 className="mx-3 name">{item.name}</h6>
              </div>
              <div className={cartmodule.highlighted}>
                <div>
                  {/* input elment */}
                  <div className={cartmodule.PlusMinusContainer}>
                    <button
                      className={cartmodule.controlbtn + " btn"}
                      onClick={() => {
                        decrement( item.id,item.quantity < 1 ? (item.quantity = 1)  : item.quantity) }}>
                      -
                    </button>
                    <p>{item.quantity}</p>
                    <button className={cartmodule.controlbtn + " btn"} onClick={() => {increment(item.id, item.quantity)}}>
                      +
                    </button>
                  </div>
                </div>
                <div>
                  <span className="rate ">
                    Rs.{isNaN(item.rate * item.quantity)? 0: item.rate * item.quantity} /-
                  </span>
                </div>
              </div>
              <button
                className={cartmodule.btn}
                onClick={() => remove(item.id)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-trash3-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5" />
                </svg>
              </button>
            </div>
          ))
        )}

        {length < 1 && tot === 0 ? (
          <p></p>
        ) : (
          <div className="d-flex justify-content-between align-items-center">
            <button
              className={cartmodule.button + " btn btn-primary"}
              onClick={() => {
                window.print();
              }}
            >
              pay your bill
            </button>
            <h1 className="sum">Total: ₹{tot}/-</h1>
          </div>
        )}

        {length < 1 ? (
          <h1>{}</h1>
        ) : (
          // billing section
          <div className={cartmodule.billingSection}>
            <p className="text-center my-3">WEB'S KITCHEN</p>
            <p className="text-center">kannamangalam</p>
            <p className="text-center">+91 9876543210</p>
            <p className="row">
              <h3 className="col-4">Items</h3>
              <h3 className="col-4">Qty</h3>
              <h3 className="col-4">Rate</h3>
            </p>
            {cart.map((bills) =>
              bills.quantity !== 0 && !isNaN(bills.quantity) ? (
                <h4 key={bills.id}>
                  <div className="row">
                    <p className="col-4">{bills.name}</p>
                    <p className="col-4">{bills.quantity}</p>
                    <p className="col-4">{bills.rate * bills.quantity}</p>
                  </div>
                </h4>
              ) : (
                <p></p>
              )
            )}
            <div className="row mx-4">
              <p className="col-12 text-end">Total ₹{tot}/-</p>
            </div>
          </div>
        )}
      </main>
    </>
  );
};

export default Viewcart;
