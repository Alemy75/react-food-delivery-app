import s from './HeaderCartButton.module.scss'
import CartIcon from "../../Cart/CartIcon.jsx";
import {useContext, useEffect, useState} from "react";
import CartContext from "../../../store/CartContext.jsx";

const HeaderCartButton = (props) => {
    const [isBtnAnimated, setIsBtnAnimated] = useState(false)

    const cartContext = useContext(CartContext)

    const cartItemsNumber = cartContext.items.reduce((currentValue, item) => {
        return currentValue + item.amount
    }, 0)

    const buttonClasses = `${s.button} ${isBtnAnimated ? s.bump : ''}`

    useEffect(() => {
        if (cartContext.items.length === 0) {
            return
        }
        setIsBtnAnimated(true)

        const timer = setTimeout(() => {
            setIsBtnAnimated(false)
        }, 300)

        return () => {
            clearTimeout(timer);
        }
    }, [cartContext.items])

    return (
        <button onClick={props.openCart} className={buttonClasses}>
            <span className={s.icon}>
                <CartIcon/>
            </span>
            <span>
                Корзина
            </span>
            <span className={s.badge}>
                {cartItemsNumber}
            </span>
        </button>
    );
};

export default HeaderCartButton;