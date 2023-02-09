import React from 'react';
import s from './Header.module.scss'
import Background from '/src/assets/sushi.jpg'
import HeaderCartButton from "../UI/HeaderCartButton/HeaderCartButton.jsx";


const Header = (props) => {
    return (
        <React.Fragment>
            <header className={s.header}>
                <h1>Япончик</h1>
                <HeaderCartButton openCart={props.openCart}/>
            </header>
            <div className={s["main-image"]}>
                <img src={Background} alt="bg"/>
            </div>
        </React.Fragment>
    );
};

export default Header;