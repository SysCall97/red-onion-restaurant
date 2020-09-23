import { Button } from '@material-ui/core';
import React, { useContext, useState } from 'react';
import { notificationContext } from '../../App';
import { foods } from '../../foodInfo';
import Card from '../Card/Card';
import { Link } from 'react-router-dom';


const FoodSection = () => {
    const [total, setTotal] = useContext(notificationContext);
    const [breakfast, setBreakfast] = useState(false);
    const [lunch, setLunch] = useState(true);
    const [dinner, setDinner] = useState(false);
    const [foodItems, setFoodItems] = useState(foods.filter(food => food.category === 'lunch'));



    const handleClick = (val) => {
        setBreakfast(val === 1);
        setLunch(val === 2);
        setDinner(val === 3);

        if (val === 1) setFoodItems(foods.filter(food => food.category === 'breakfast'));
        else if (val === 2) setFoodItems(foods.filter(food => food.category === 'lunch'));
        else setFoodItems(foods.filter(food => food.category === 'dinner'));
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
                        <Link to="/checkout" className="headerSignin">
                            <Button variant="contained" color="secondary">Checkout Your Food</Button>
                        </Link>
                    : <Button variant="contained" disabled>Checkout Your Food</Button>
                }
            </div>
        </div >
    );
};

export default FoodSection;