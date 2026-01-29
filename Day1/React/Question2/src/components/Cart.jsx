import React, { useState } from "react";

function Cart({ prod, setProd }) {
  const handleIncrement = (id) => {
    setProd((prev) =>
      prev.map((i) => (i.id === id ? { ...i, quantity: i.quantity + 1 } : i)),
    );
  };

  const handleDecrement = (id) => {
    setProd((prev) =>
      prev.map((i) =>
        i.id === id && i.quantity > 1 ? { ...i, quantity: i.quantity - 1 } : i,
      ),
    );
  };

  const total = prod.reduce((sum, i) => sum + i.price * i.quantity, 0);
  const totalItems = prod.reduce((sum, i) => sum + i.quantity, 0);
  const finalAmount = totalItems >= 5 ? total * 0.9 : total;
  console.log(prod)
  return (
    <div>
      <h1>Product Cart</h1>
      <div style={{}}>
        {prod &&
          prod.map((p) => (
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-between",
                width: "96%",
                height: "14rem",
                border: "2px solid black",
                padding: "0.4rem",
              }}
              key={p.id}>
              <div style={{ width: "32%", height: "100%" }}>
                <img
                  style={{ width: "100%", height: "100%" }}
                  src={p.image}
                  alt="productImage"
                />
              </div>
              <div
                style={{
                  width: "64%",
                  display: "flex",
                  justifyContent: "space-between",
                }}>
                <div>
                  <h4>Price: {p.price} </h4>
                  <h5>Title: {p.title}</h5>
                  <p>Category: {p.category} </p>
                </div>
                <div>
                  <button onClick={() => handleIncrement(p.id)}>
                    increment
                  </button>
                  <h4>{p.quantity}</h4>
                  <button onClick={() => handleDecrement(p.id)}>
                    decrement
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>
      {totalItems >= 5 && <p>10% Bulk Discount Applied</p> }
      <h1>Total Amount: {finalAmount.toFixed(2)}</h1>
    </div>
  );
}

export default Cart;
