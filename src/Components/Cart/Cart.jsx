import React, {useContext} from 'react';
import s from './Cart.module.scss'
import Modal from "../UI/Modal/Modal.jsx";
import CartContext from "../../store/CartContext.jsx";
import CartItem from "./CartItem.jsx";


const Cart = (props) => {
    const cartContext = useContext(CartContext)

    const totalAmount = `$ ${Math.abs(cartContext.totalAmount).toFixed(2)}`

    const hasItems = cartContext.items.length > 0

    const removeCartItemHandler = (id) => {
        cartContext.removeItem(id)
    }

    const addCartItemHandler = (item) => {
        cartContext.addItem({...item, amount: 1})
    }

    const cartItems = cartContext.items.map(item => <CartItem
        key={item.id}
        name={item.name}
        amount={item.amount}
        price={item.price}
        onAdd={addCartItemHandler.bind(null, item)}
        onRemove={removeCartItemHandler.bind(null, item.id)}
    />);

    return (
        <Modal>
            <ul className={s['cart-items']}>{cartItems}</ul>
            <div className={s.total}>
                <span>Итого: </span>
                <span>{totalAmount}</span>
            </div>
            <div className={s.actions}>
                <button onClick={props.openCart} className={s['button-alt']}>Закрыть</button>
                {hasItems && <button className={s.button}>Заказать</button>}
            </div>
        </Modal>
    );
};

export default Cart;