import React, {useReducer} from 'react';
import CartContext from "./CartContext.jsx";


const defaultCartState = {
    items: [],
    totalAmount: 0
}

const cartReducer = (state, action) => {
    if (action.type === "ADD_ITEM") {
        // Обновление общей стоимости всех товаров
        const updatedTotalAmount =
            state.totalAmount + (action.item.price * action.item.amount)

        // Создание индекса существующего товара
        const existingCartItemIndex = state.items.findIndex(item => {
            return item.id === action.item.id
        })

        // Сопия существующего товара
        const existingCartItem = state.items[existingCartItemIndex]

        let updatedItem;

        let updatedItems;

        if (existingCartItem) {
            // Обновленный item
            updatedItem = {
                ...existingCartItem,
                amount: existingCartItem.amount + action.item.amount
            }

            updatedItems = [...state.items]
            // Пихаем на место старого существующего новый с новым количеством
            updatedItems[existingCartItemIndex] = updatedItem
        } else {
            updatedItem = {
                ...action.item
            }
            updatedItems = state.items.concat(updatedItem)
        }

        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount,
        }
    }
    if (action.type === "REMOVE_ITEM") {
        // Создание индекса существующего товара
        const existingCartItemIndex = state.items.findIndex(item => {
            return item.id === action.id
        })

        // Сопия существующего товара
        const existingCartItem = state.items[existingCartItemIndex]

        // Обновление общей стоимости всех товаров
        const updatedTotalAmount =
            state.totalAmount - existingCartItem.price

        let updatedItems;

        if (existingCartItem.amount === 1) {
            updatedItems = state.items.filter(item => item.id != action.id)
        } else {
            const updatedItem = {
                ...existingCartItem,
                amount: existingCartItem.amount - 1
            }
            updatedItems = [...state.items]
            updatedItems[existingCartItemIndex] = updatedItem
        }
        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        }
    }
    return defaultCartState

}

// Управление данными Cart, предоставление контекста компонентам с доступом
const CartContextProvider = (props) => {

    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState)

    const addItemHandler = (item) => {
        dispatchCartAction({
            type: "ADD_ITEM",
            item: item
        })

    }

    const removeItemHandler = (id) => {
        dispatchCartAction({
            type: "REMOVE_ITEM",
            id: id
        })
    }

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemHandler,
        removeItem: removeItemHandler,
    }

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    );
};

export default CartContextProvider;