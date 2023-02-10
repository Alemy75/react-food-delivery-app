import React, {useState} from "react";
import Header from "./Components/Layout/Header.jsx";
import Meals from "./Components/Meals/Meals.jsx";
import Cart from "./Components/Cart/Cart.jsx";
import CartContextProvider from "./store/CartContextProvider.jsx";


function App() {
    const [isCartOpen, setIsCartOpen] = useState(false)

    const openCart = () => {
        setIsCartOpen(prev => {
            return !prev
        })
    }

    return (
        <CartContextProvider>
            {isCartOpen && <Cart openCart={openCart}/>}
            <Header openCart={openCart}/>
            <main>
                <Meals/>
            </main>
        </CartContextProvider>
    )
}

export default App
