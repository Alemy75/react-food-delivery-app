import React, { useState } from "react";
import s from './MealItemForm.module.scss'
import Input from "../../UI/Input/Input.jsx";
import {useRef} from "react";

const MealItemForm = (props) => {

    const [isValid, setIsValid] = useState(true)

    const amountInputRef = useRef()

    const submitHandler = (event) => {
        event.preventDefault()

        const inputAmount = amountInputRef.current.value

        if (inputAmount.trim().length === 0 || +inputAmount < 1 || +inputAmount > 10) {
            setIsValid(false)
            return
        }

        props.onAddToCart(+inputAmount)
    }

    return (
        <form className={s.form} onSubmit={submitHandler}>
            <Input
                ref={amountInputRef}
                label='Количество'
                input={{
                    id: props.id,
                    type: 'number',
                    min: '1',
                    step: '1',
                    defaultValue: '0',
                }}
            />
            <button>Добавить</button>
            {!isValid && <p>Введите количество от 1 до 10</p>}
        </form>
    );
};

export default MealItemForm;