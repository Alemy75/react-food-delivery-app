import React, {useState} from "react";
import Header from "./Components/Layout/Header.jsx";
import Meals from "./Components/Meals/Meals.jsx";
import Cart from "./Components/Cart/Cart.jsx";


function App() {
    const [isCartOpen, setIsCartOpen] = useState(false)

    const openCart = () => {
        setIsCartOpen(!isCartOpen)
    }

    return (
        <React.Fragment>
            {isCartOpen && <Cart openCart={openCart}/>}
            <Header openCart={openCart}/>
            <main>
                <Meals/>
            </main>
        </React.Fragment>
    )
}

export default App
