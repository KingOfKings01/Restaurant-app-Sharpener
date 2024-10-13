import { useState } from 'react';
import styles from './card.module.css'
import mealsList from './mealsList';

export default function Meals() {
    const [meals, setMeals] = useState(mealsList);
    return (
        <div className={styles.center}>
            <div className={styles.card2}>
            {meals.map(({id, name, description, price})=>(
            <div key={id} className={styles.list}>
                <h3>{name}</h3>
                <p className={styles.cursive}>{description}</p>
                <p className={styles.amount}>${price}</p>
                <hr />
            </div>
            ))}
            </div>
        </div>
    )
}
