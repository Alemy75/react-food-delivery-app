import React from 'react';
import PromoText from "./PromoText.jsx";
import MealList from "./MealList.jsx";

const Meals = () => {
    return (
        <React.Fragment>
            <PromoText/>
            <MealList/>
        </React.Fragment>
    );
};

export default Meals;