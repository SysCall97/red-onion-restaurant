import { Button } from '@material-ui/core';
import React, { useContext, useState } from 'react';
import { notificationContext } from '../../App';
import { foods } from '../../foodInfo';
import Card from '../Card/Card';


const FoodSection = () => {
    const [total, setTotal] = useContext(notificationContext);
    const [breakfast, setBreakfast] = useState(false);
    const [lunch, setLunch] = useState(true);
    const [dinner, setDinner] = useState(false);
    const [foodItems, setFoodItems] = useState(foods.filter(food => food.category === 'lunch'));



    const handleClick = (val) => {
        if (val === 1) {
            setBreakfast(true);
            setLunch(false);
            setDinner(false);
            setFoodItems(foods.filter(food => food.category === 'breakfast'));
        } else if (val === 2) {
            setBreakfast(false);
            setLunch(true);
            setDinner(false);
            setFoodItems(foods.filter(food => food.category === 'lunch'));
        } else {
            setBreakfast(false);
            setLunch(false);
            setDinner(true);
            setFoodItems(foods.filter(food => food.category === 'dinner'));
        }
    }
    return (
        <div>
            {
                breakfast &&
                <div className="divStyle">
                    <h4 onClick={() => handleClick(1)} className="active">Breakfast</h4>
                    <h4 onClick={() => handleClick(2)} className="FoodSectionText">Lunch</h4>
                    <h4 onClick={() => handleClick(3)} className="FoodSectionText">Dinner</h4>
                </div>
            }
            {
                lunch &&
                <div className="divStyle">
                    <h4 onClick={() => handleClick(1)} className="FoodSectionText">Breakfast</h4>
                    <h4 onClick={() => handleClick(2)} className="active">Lunch</h4>
                    <h4 onClick={() => handleClick(3)} className="FoodSectionText">Dinner</h4>
                </div>
            }
            {
                dinner &&
                <div className="divStyle">
                    <h4 onClick={() => handleClick(1)} className="FoodSectionText">Breakfast</h4>
                    <h4 onClick={() => handleClick(2)} className="FoodSectionText">Lunch</h4>
                    <h4 onClick={() => handleClick(3)} className="active">Dinner</h4>
                </div>
            }
            <div className="container">

                <div className="card-deck">
                    {
                        foodItems.map(item => <Card item={item} key={item.id} />)
                    }
                </div>

            </div>
            <div className="foodSectionButton">
                {
                    total > 0 ?
                    <Button variant="contained" color="secondary">Checkout Your Food</Button>
                    : <Button variant="contained" disabled>Checkout Your Food</Button>
                }
            </div>
        </div >
    );
};

export default FoodSection;