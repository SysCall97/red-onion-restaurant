import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { foods } from '../../foodInfo';
import { Button } from '@material-ui/core';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';
import { notificationContext } from '../../App';


const ItemDetails = () => {
    const { id } = useParams();
    const [total, setTotal] = useContext(notificationContext);
    const [quantity, setQuantity] = useState(0);
    const foodItem = foods.find(food => food.id === id);

    const { img, details, name, price } = foodItem;

    const handleAdd = () => {
        addToDatabaseCart(id, quantity);
        const cart = getDatabaseCart();
        const newTotal = Object.entries(cart).reduce((total, item) => total+item[1], 0);
        setTotal(newTotal);
    }

    return (
        <div className="ItemDetailsContainer">
            <div className="ItemDetailsLeft">
                <h1 className="ItemDetailsName">{name}</h1>
                <p className="ItemDetailsDetails">{details}</p>
                <div className="ItemDetailsPriceQuantity">
                    <div><h2 className="ItemDetailsPrice">${price}</h2></div>
                    <div className="ItemDetailsQuantity">
                        <div className="ItemDetailsDecrease" onClick={() => {
                            if(quantity > 0) setQuantity(quantity-1);
                        }}>- </div>
                        <div> {quantity} </div>
                         <div className="ItemDetailsIncrease" onClick={() => setQuantity(quantity+1)}> +</div>
                    </div>
                </div>
                <Button 
                    onClick={handleAdd}
                    variant="contained" 
                    color="secondary" 
                    className="ItemDetailsButton"
                    >
                        <ShoppingCartOutlinedIcon /> 
                        <div>Add</div>
                </Button>
            </div>
            <div>
                <img src={img} alt="" style={{ width: "40vw" }} />
            </div>
        </div>
    );
};

export default ItemDetails;