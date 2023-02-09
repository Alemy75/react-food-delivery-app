import React from 'react';
import s from './Cart.module.scss'
import Modal from "../UI/Modal/Modal.jsx";

const Cart = (props) => {

    const cartItems = [
        {
            id: 'm1',
            name: 'Суша',
            amount: 2,
            price: 2.22
        }
    ].map(item => <li key={item.id}>{item.name}</li>);

    return (
        <Modal>
            <ul className={s['cart-items']}>{cartItems}</ul>
            <div className={s.total}>
                <span>Итого: </span>
                <span>49.99</span>
            </div>
            <div className={s.actions}>
                <button onClick={props.openCart} className={s['button-alt']}>Закрыть</button>
                <button className={s.button}>Заказать</button>
            </div>
        </Modal>
    );
};

export default Cart;