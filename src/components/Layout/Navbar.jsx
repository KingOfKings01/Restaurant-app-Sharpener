import { FaCartShopping } from "react-icons/fa6";
import styles from './navbar.module.css'
import CartModal from "../Cart/CartModal";
import { useState } from "react";

export default function Navbar() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <div>

    <nav className={styles.nav}>
        <h2>ReactMeals</h2>
        <button className={styles.cartBtn} onClick={()=>setModalIsOpen(true)}>
            <FaCartShopping />
            <span>Your Cart</span>
            <span className={styles.cartCount}>{0}</span>
        </button>

    </nav>
        {modalIsOpen && <CartModal setModalIsOpen={setModalIsOpen}/>}
    </div>
  )
}
