import React, {useContext} from 'react';
import s from './MealItem.module.scss'
import MealItemForm from "./MealItemForm.jsx";
import CartContext from "../../../store/CartContext.jsx";


const MealItem = (props) => {
    const cartContext = useContext(CartContext)

    const onAddToCartHandler = (amount) => {
        cartContext.addItem({
            id: props.id,
            name: props.name,
            amount: amount,
            price: props.price
        })
    }

    const formattedPrice = `$ ${props.price.toFixed(2)}`
    return (
        <li className={s.meal}>
            <div>
                <h3>{props.name}</h3>
                <div className={s.description}>{props.description}</div>
                <div className={s.price}>{formattedPrice}</div>
            </div>
            <div>
                <MealItemForm onAddToCart={onAddToCartHandler} id={props.id}/>
            </div>
        </li>
    );
};

export default MealItem;