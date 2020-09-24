import { Button } from '@material-ui/core';
import React from 'react';

const CheckoutRight = props => {
    const { orderedFoods, activatePlaceOrder } = props;
    const totalItems = orderedFoods.reduce((total, food) => total + food.quantity, 0);
    const itemCost = orderedFoods.reduce((total, food) => total + food.price*food.quantity, 0);
    const tax = itemCost * 0.01;
    const fee = totalItems * 0.3;
    const total = itemCost + tax + fee

    return (
        <div className="checkoutRight">
                <p>From: <span style={{fontWeight: "500"}}>Gulshan Plaza</span> </p>
                <p>To: <span id="to" style={{fontWeight: "500"}}></span> </p>

                {
                    orderedFoods.map(food => 
                        <div className="orderedFoodCard">
                            <img src={food.img} alt="" width="120px"/>
                            <div style={{width:"max-content"}}>
                                <h3>{food.name}</h3>
                                <p><span style={{fontWeight:"500", fontSize:"30px", color: "#e51a4b"}}>${food.price}</span> X {food.quantity}</p>
                            </div>
                        </div>
                    )
                }
                <table>
                    <tbody>
                        <tr>
                            <td>Subtotal({totalItems} items): </td>
                            <td>${itemCost.toFixed(2)}</td>
                        </tr>

                        <tr>
                            <td>Tax:</td>
                            <td>${tax.toFixed(2)}</td>
                        </tr>

                        <tr>
                            <td>Delivery fee:</td>
                            <td>${fee.toFixed(2)}</td>
                        </tr>

                        <tr>
                            <td>Total</td>
                            <td>${total.toFixed(2)}</td>
                        </tr>
                    </tbody>
                </table>
                {activatePlaceOrder && <button className="loginSubmit" style={{width:"300px"}} type="submit">Place Order</button>}
                {!activatePlaceOrder && <Button variant="contained" style={{width:"300px"}} type="submit" disabled>Place Order</Button>}
            </div>
    );
};

export default CheckoutRight;