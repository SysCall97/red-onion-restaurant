import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { foods } from '../../foodInfo';
import { getDatabaseCart } from '../../utilities/databaseManager';
import { userContext } from '../View/View';

const CheckOutFoods = () => {
    const { register, errors, handleSubmit } = useForm();
    const [loggedinUser, setLoggedinUser] = React.useContext(userContext);
    const [activatePlaceOrder, setActivatePlaceOrder] = useState(false);
    const orderedFoodKeys = getDatabaseCart();
    

    const orderedFoods = Object.entries(orderedFoodKeys).map(key => {
        const food = foods.find(food => food.id === key[0]);
        return {
            name: food.name,
            img: food.img,
            price: food.price,
            quantity: key[1]
        }
    });

    const onSubmit = () => {
        setActivatePlaceOrder(true);
    }

    const handleAddress = event => {
        document.getElementById('to').innerText = event.target.value;
    }

    return (
        <div className="checkoutContainer">
            <div className="checkoutLeft">
                <div className="checkoutTitle">Edit Delivery Details</div>

                <form className="loginFormStyle" onSubmit={handleSubmit(onSubmit)}>
                    
                    <input className="loginInput" name="name" defaultValue={loggedinUser.name} ref={register({ required: true })} disabled/>

                    <input className="loginInput" name="email" defaultValue={loggedinUser.email} ref={register({ required: true })} disabled/>

                    <input className="loginInput" onChange={handleAddress} name="address" placeholder="your address" ref={register({ required: true })} />
                    {errors.address && <span>This field is required</span>}

                    <input className="loginSubmit" type="submit" value="Save and Continue" />

                </form>
            </div>

            <div className="checkoutRight">
                <p>From: <span style={{fontWeight: "500"}}>Gulshan Plaza</span> </p>
                <p>To: <span id="to" style={{fontWeight: "500"}}></span> </p>

                {
                    orderedFoods.map(food => 
                        <div style={{display:"flex", backgroundColor: "#ddd", margin:"2%"}}>
                            <img src={food.img} alt="" width="90px"/>
                            <div style={{width:"max-content"}}>
                                <h3>{food.name}</h3>
                                <h2 style={{color: "#e51a4b"}}>${food.price}</h2>
                            </div>
                        </div>
                    )
                }

            </div>
        </div>
    );
};

export default CheckOutFoods;