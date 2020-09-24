import React from 'react';
import map from '../../images/ordercomplete.png';
import shipping from '../../images/Image/shipping.png';
import { userContext } from '../View/View';

const OrderCompleted = () => {
    const [loggedinUser] = React.useContext(userContext);
    return (
        <div className="checkoutContainer">
            <div className="checkoutLeft">
                <img src={map} alt="" width="95%"/>
            </div>
            <div className="checkoutRight">
                <div className="orderCompletedLeft">

                    <img src={shipping} alt="" width="30%"/>

                    <div className="addressCard">
                        <ul>
                            <li>
                                Your Location <br/>
                                {loggedinUser.address}
                            </li>
                            <li>
                                Shop Address <br/>
                                Gulshan Plaza Restaurant, Dhaka
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default OrderCompleted;