import { Button } from '@material-ui/core';
import React, { useContext, useState } from 'react';
import { notificationContext } from '../../App';
import { foods } from '../../foodInfo';
import Card from '../Card/Card';


const FoodSection = () => {
    const divStyle = {
        width: "1fr",
        display: "flex",
        justifyContent: "center"
    }
    const active = {
        color: "red",
        cursor: "pointer",
        borderBottom: "5px solid red",
        margin: "15px 20px"
    }
    const text = {
        cursor: "pointer",
        margin: "15px 20px"
    }
    const [total, setTotal] = useContext(notificationContext);
    const [breakfast, setBreakfast] = useState(false);
    const [lunch, setLunch] = useState(true);
    const [dinner, setDinner] = useState(false);
    const [foodItems2, setFoodItems2] = useState(foods.filter(food => food.category === 'lunch'));



    const handleClick = (val) => {
        if (val === 1) {
            setBreakfast(true);
            setLunch(false);
            setDinner(false);
            setFoodItems2(foods.filter(food => food.category === 'breakfast'));
        } else if (val === 2) {
            setBreakfast(false);
            setLunch(true);
            setDinner(false);
            setFoodItems2(foods.filter(food => food.category === 'lunch'));
        } else {
            setBreakfast(false);
            setLunch(false);
            setDinner(true);
            setFoodItems2(foods.filter(food => food.category === 'dinner'));
        }
    }
    return (
        <div>
            {
                breakfast &&
                <div style={divStyle}>
                    <h4 onClick={() => handleClick(1)} style={active}>Breakfast</h4>
                    <h4 onClick={() => handleClick(2)} style={text}>Lunch</h4>
                    <h4 onClick={() => handleClick(3)} style={text}>Dinner</h4>
                </div>
            }
            {
                lunch &&
                <div style={divStyle}>
                    <h4 onClick={() => handleClick(1)} style={text}>Breakfast</h4>
                    <h4 onClick={() => handleClick(2)} style={active}>Lunch</h4>
                    <h4 onClick={() => handleClick(3)} style={text}>Dinner</h4>
                </div>
            }
            {
                dinner &&
                <div style={divStyle}>
                    <h4 onClick={() => handleClick(1)} style={text}>Breakfast</h4>
                    <h4 onClick={() => handleClick(2)} style={text}>Lunch</h4>
                    <h4 onClick={() => handleClick(3)} style={active}>Dinner</h4>
                </div>
            }
            <div className="container">

                {/* <div className="card-deck">
                    {
                        foodItems.map(item => <Card item={item} key={item.id} />)
                    }
                </div> */}

                <div className="card-deck">
                    {
                        foodItems2.map(item => <Card item={item} key={item.id} />)
                    }
                </div>
            </div>
            <div style={{display:"flex", justifyContent:"center", margin:"5%"}}>
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