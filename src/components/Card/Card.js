import React from 'react';
import { Link } from 'react-router-dom';

const Card = (props) => {
    const { img, name, description, price, id } = props.item;
    
    
    return (
        <Link className="Link" to={`/item/${id}`}>
            <div className="card mb-4 cardStyle">
                <img src={img} className="card-img-top img-fluid" alt="..." style={{ height: "150px" }} />
                <div className="card-body">
                    <h2 className="card-title cardTitle">{name}</h2>
                    <p className="card-text cardText">{description}</p>
                    <p className="card-text cardText"><small>Price: ${price}</small></p>
                </div>
            </div>
        </Link>
    );
};

export default Card;