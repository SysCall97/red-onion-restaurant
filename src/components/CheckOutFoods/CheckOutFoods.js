import React, { useState } from 'react';
import { foods } from '../../foodInfo';
import { getDatabaseCart } from '../../utilities/databaseManager';
import CheckoutLeft from '../CheckoutLeft/CheckoutLeft';
import CheckoutRight from '../CheckoutRight/CheckoutRight';
import { userContext } from '../View/View';

const CheckOutFoods = () => {
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

    const processDeliveryData = ({address, phoneNumber}) => {
        const updateLoggedinUser = {...loggedinUser, address: address, phoneNumber: phoneNumber};
        if(address.length > 0) {
            setActivatePlaceOrder(true);
            setLoggedinUser(updateLoggedinUser);
        }
    }

    const handleAddress = event => document.getElementById('to').innerText = event.target.value;

    return (
        <div className="checkoutContainer">

            <CheckoutLeft
                processDeliveryData = {processDeliveryData}
                handleAddress={handleAddress} 
                activatePlaceOrder={activatePlaceOrder} 
                loggedinUser={loggedinUser}
            />

            <CheckoutRight 
                orderedFoods={orderedFoods} 
                activatePlaceOrder={activatePlaceOrder} 
            />

        </div>
    );
};

export default CheckOutFoods;