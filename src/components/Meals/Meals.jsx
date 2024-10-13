import { useState } from 'react';
import styles from './card.module.css';
import mealsList from './mealsList';

export default function Meals() {
  const [meals] = useState(mealsList);
  const [cartQuantities, setCartQuantities] = useState({});
  const [qtyValues, setQtyValues] = useState({});
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [orderDetails, setOrderDetails] = useState({
    name: "",
    totalAmount: 0,
  });

  const handleQuantityChange = (e, id) => {
    const { value } = e.target;
    setQtyValues({ ...qtyValues, [id]: value });
  };

  const handleSubmit = (e, id) => {
    e.preventDefault();

    console.log(parseInt(qtyValues[id]));
    console.log(cartQuantities);
    setCartQuantities({ ...cartQuantities, [id]: parseInt(qtyValues[id]) || 1 });
    setQtyValues({ ...qtyValues, [id]: 1 });
  };

  const placeOrder = (id,name, price) => {
    setOrderDetails(orderDetails=> {
      return {
        name: name,
        totalAmount: price,
      }
    })
    setModalIsOpen(true);
    console.log(cartQuantities);
  }

  return (
    <div className={styles.center}>
      <div className={styles.card2}>
        {meals.map(({ id, name, description, price }) => (
          <div key={id} className={styles.list}>
            <div className={styles.product}>
              <div>
                <h3>{name}</h3>
                <p className={styles.cursive}>{description}</p>
                <p className={styles.amount}>${price}</p>
              </div>
              <form onSubmit={(e) => handleSubmit(e, id)}>
                <label htmlFor={`qty-${id}`}>
                  Amount &nbsp;
                  <input
                    type="number"
                    name={`qty-${id}`}
                    min={1}
                    value={qtyValues[id] || 1}
                    onChange={(e) => handleQuantityChange(e, id)}
                  />
                </label>
                <button className={styles.addToCart} onClick={()=>placeOrder(id,name, price)}>+ Add</button>
              </form>
            </div>
            <hr />
          </div>
        ))}
      </div>
      {modalIsOpen &&
        <div className={styles.background}>
          <div className={styles.modal}>
            <p className={styles.cursive}>{orderDetails.name}</p>
            <div className={styles.totalAmount}>
              <h3>
                Total Amount
              </h3>
              <h3>
                $ {orderDetails.totalAmount}
              </h3>
            </div>
            <div className={styles.btns}>
              <button className={styles.close} onClick={() => setModalIsOpen(false)}>Close</button>
              <button className={styles.order}>Order</button>
            </div>
          </div>
        </div>
      }

    </div>
  );
}
