import s from './MealItemForm.module.scss'
import Input from "../../UI/Input/Input.jsx";

const MealItemForm = (props) => {
    return (
        <form className={s.form}>
            <Input
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
        </form>
    );
};

export default MealItemForm;