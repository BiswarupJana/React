import MealsSummary from "./MealsSummary";
import AvailableMeals from "./AvailableMeals";
import { Fragment } from "react";
import classes from './Meals.module.css';
const Meals = () => {
    return <Fragment className={classes.html}>
        <MealsSummary />
        <AvailableMeals />
    </Fragment>
};

export default Meals;