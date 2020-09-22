import React from 'react';
import { Link } from 'react-router-dom';

const Card = (props) => {
    const { img, name, description, price, id } = props.item;
    
    const cardStyle = {
        boxShadow: "5px 5px 10px gray",
        width: "70%",
        textAlign: "center",
        padding: "10px",
        margin: "10px",
        cursor: "pointer"
    }
    return (
        <Link style={{textDecoration:"none", color: "none"}} to={`/home/item/${id}`}>
            <div className="card mb-4" style={cardStyle}>
                <img src={img} className="card-img-top img-fluid" alt="..." style={{ height: "150px" }} />
                <div className="card-body">
                    <h2 className="card-title" style={{color: "#3498db"}}>{name}</h2>
                    <p className="card-text" style={{color: "#000"}}>{description}</p>
                    <p className="card-text" style={{color: "#000"}}><small>Price: ${price}</small></p>
                </div>
            </div>
        </Link>
    );
};

export default Card;