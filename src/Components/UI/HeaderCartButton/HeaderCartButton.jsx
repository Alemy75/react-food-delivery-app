import s from './HeaderCartButton.module.scss'
import CartIcon from "../../Cart/CartIcon.jsx";

const HeaderCartButton = (props) => {
    return (
        <button onClick={props.openCart} className={s.button}>
            <span className={s.icon}>
                <CartIcon/>
            </span>
            <span>
                Корзина
            </span>
            <span className={s.badge}>
                0
            </span>
        </button>
    );
};

export default HeaderCartButton;