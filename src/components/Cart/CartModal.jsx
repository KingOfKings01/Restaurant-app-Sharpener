import styles from "./cartModal.module.css"

export default function CartModal({setModalIsOpen}) {

    return (
        <div>
            <div className={styles.background}>
                <div className={styles.modal}>
                    <p className={styles.cursive}>Grilled Chicken</p>
                    <div className={styles.totalAmount}>
                        <h3>
                            Total Amount
                        </h3>
                        <h3>
                            $ 12.99
                        </h3>
                    </div>
                    <div className={styles.btns}>
                        <button className={styles.close} onClick={() => setModalIsOpen(false)}>Close</button>
                        <button className={styles.order}>Order</button>
                    </div>
                </div>
            </div>

        </div>
    )
}
