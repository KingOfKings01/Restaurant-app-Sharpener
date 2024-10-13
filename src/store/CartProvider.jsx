import { useState } from "react";
import CartContext from "./cart-context";

export default function CartProvider(props) {
  const [items, setItems] = useState([]);
  const [itemCount, setItemCount] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  const addItemToCartHandler = product => {

    // console.log(product);

    setItems(prevItems => {

      const existingProductIndex = prevItems.findIndex(item => item.id === product.id);
      if (existingProductIndex !== -1) {
        const updatedItems = [...prevItems];
        updatedItems[existingProductIndex].quantity += product.quantity;
        setTotalAmount(prev => prev + product.price * product.quantity );

        
        setItemCount(itemCount + 1);
        return updatedItems;

      } else {

        const newProduct = {
          id: product.id,
          name: product.name,
          quantity: product.quantity,
          price: product.price
        };


        setItemCount(prev => prev + 1);
        setTotalAmount(prev => prev + product.price * product.quantity);

        return [...prevItems, newProduct];
      }


    });
  };

  const initialState = {
    items: items,
    totalAmount: totalAmount,
    addItem: addItemToCartHandler,
    itemCount: itemCount,
  };

  return (
    <CartContext.Provider value={initialState}>
      {props.children}
    </CartContext.Provider>
  );
}
