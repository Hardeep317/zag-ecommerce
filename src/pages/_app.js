import AppContext from "@/AppContext";
import "@/styles/globals.css";
import { useEffect, useState } from "react";

export default function App({ Component, pageProps }) {

  const [cart, setCart] = useState({});
  const [subt, setSubt] = useState(0);

  const saveCart = (mycart) => {
    localStorage.setItem("cart", JSON.stringify(mycart));
    let total = 0;
    let keys = Object.keys(mycart);

    for (let i = 0; i < keys.length; i++) {
      console.log(cart[keys[i]].qty)
      total += cart[keys[i]].price * cart[keys[i]].qty;
    }
    setSubt(total);
  };

  useEffect(() => {
    try {
      if (localStorage.getItem("cart")) {
        setCart(JSON.parse(localStorage.getItem("cart")));
      }
    } catch (error) {
      console.log(error);
      localStorage.clear();
    }
  },[])


  function addToCart(itemcode, qty, img, title,  size, price) {
    let newCart = cart;

    if (itemcode in cart) {
      newCart[itemcode].qty = cart[itemcode].qty + qty;
    } else {
      newCart[itemcode] = { qty: 1, img, title, size, price };
    }

    setCart(newCart);
    saveCart(newCart);
  }

  function removeFromCart(itemcode, qty, title, variant, size, price) {
    let newCart = cart;

    if (itemcode in cart && newCart[itemcode].qty > 0) {
      newCart[itemcode].qty = cart[itemcode].qty - qty;
    }

    if (newCart[itemcode].qty <= 0) {
      delete newCart[itemcode];
    }

    setCart(newCart);
    saveCart(newCart);
  }

  function deleteItem(itemcode) {
    let newCart = cart;
    delete newCart[itemcode];

    setCart(newCart);
    saveCart(newCart);
  }

  return (
    <AppContext.Provider value={{addToCart, cart, removeFromCart, subt, deleteItem}}>
      <Component {...pageProps} />
    </AppContext.Provider>
  );
}
