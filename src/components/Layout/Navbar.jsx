import { FaCartShopping } from "react-icons/fa6";
import styles from './navbar.module.css'

export default function Navbar() {
  return (
    <nav className={styles.nav}>
        <h2>ReactMeals</h2>
        <button className={styles.cartBtn}>
            <FaCartShopping />
            <span>Your Cart</span>
            <span className={styles.cartCount}>{0}</span>
        </button>
    </nav>
  )
}
