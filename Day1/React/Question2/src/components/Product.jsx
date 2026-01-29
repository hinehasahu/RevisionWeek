import React, { useEffect, useState } from "react";
import Cart from "./Cart";

function Product() {
  const [product, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  
  const addToCart = (prod) => {
    setCart((prev) => {
      const existing = prev.find(i => i.id === prod.id)
      if(existing){
        return prev.map(i => i.id === prod.id ? {...i, quantity: i.quantity + 1} : i)
      }
      return [...prev, {...prod, quantity: 1}]
    });
  };
  const fetchData = async () => {
    let data = await fetch(`https://fakestoreapi.com/products`);
    let res = await data.json();
    setProducts(res);
  };

  // console.log(cart);

  useEffect(() => {
    fetchData();
  }, []);

  // console.log(product);
  return (
    <div>
        
      <h1>Products list</h1>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
        }}>
        {product &&
          product.map((p) => (
            <div
              style={{
                width: "10rem",
                border: "2px solid black",
                padding: "0.4rem",
              }}
              key={p.id}>
              <img
                style={{ width: "100%", height: "48%" }}
                src={p.image}
                alt="productImage"
              />
              <h4>Price: {p.price} </h4>
              <h5>Title: {p.title}</h5>
              <p>Category: {p.category} </p>
              <button onClick={() => addToCart(p)}>Add to cart</button>
            </div>
          ))}
      </div>
      <Cart prod={cart} setProd={setCart} />
    </div>
  );
}

export default Product;
