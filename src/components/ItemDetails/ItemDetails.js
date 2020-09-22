import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { breakfastItems, lunchItems, dinnerItems } from '../../foodInfo';
import { Button } from '@material-ui/core';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';
import { notificationContext } from '../../App';


const ItemDetails = () => {
    const { id } = useParams();
    const [total, setTotal] = useContext(notificationContext);
    const [quantity, setQuantity] = useState(0);
    let foodItem = null;
    if (id[0] === 'b') foodItem = breakfastItems.find(breakfast => breakfast.id === id);
    else if (id[0] === 'l') foodItem = lunchItems.find(lunch => lunch.id === id);
    else if (id[0] === 'd') foodItem = dinnerItems.find(dinner => dinner.id === id);
    const { img, details, name, price } = foodItem;

    const handleAdd = () => {
        addToDatabaseCart(id, quantity);
        const cart = getDatabaseCart();
        const newTotal = Object.entries(cart).reduce((total, item) => total+item[1], 0);
        setTotal(newTotal);
    }

    return (
        <div style={{ display: "flex", justifyContent: "center", marginTop: "5%" }}>
            <div style={{ marginRight: "10%", width: "35%" }}>
                <h1 style={{ fontWeight: "600" }}>{name}</h1>
                <p style={{ color: "gray" }}>{details}</p>
                <div style={{ display: "flex", alignItems: "center" }}>
                    <div><h2 style={{ fontSize: "30px", fontWeight: "400" }}>${price}</h2></div>
                    <div style={{
                        fontSize: "30px",
                        fontWeight: "400",
                        borderRadius: "20px",
                        border: "1px solid black",
                        width: "8vw",
                        marginLeft: "5%",
                        height: "6vh",
                        display: "flex",
                        justifyContent: "space-around",
                        alignItems: "center"
                    }}>
                        <div style={{ color: "gray", cursor: "pointer" }} onClick={() => {
                            if(quantity > 0) setQuantity(quantity-1);
                        }}>- </div>
                        <div> {quantity} </div>
                         <div style={{ color: "red", cursor: "pointer" }} onClick={() => setQuantity(quantity+1)}> +</div>
                    </div>
                </div>
                <Button 
                    onClick={handleAdd}
                    variant="contained" 
                    color="secondary" 
                    style={{
                        borderRadius:"20px", 
                        display:"flex", 
                        alignItems:"center"
                }}>
                        <ShoppingCartOutlinedIcon /> 
                        <div>Add</div>
                </Button>
            </div>
            <div>
                <img src={img} alt="" style={{
                    width: "40vw"
                }} />
            </div>
        </div>
    );
};

export default ItemDetails;