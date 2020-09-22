import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { notificationContext } from '../../App';
import logo from "../../images/logo2.png";
import { getDatabaseCart } from '../../utilities/databaseManager';


const Header = () => {
    const [total, setTotal] = useContext(notificationContext);
    const cart = getDatabaseCart();
    const newTotal = Object.entries(cart).reduce((total, item) => total+item[1], 0);
    setTotal(newTotal);

    return (
        <div className="header">
            <div className="left">
                <Link to="/">
                    <img src={logo} alt=""  width="100vw" height="100%" />
                </Link>
            </div>

            <div className="right">
                <div>
                    <div className="headerTotal"> {total} </div>
                    <ShoppingCartOutlinedIcon />
                </div>
                <Link className="headerLogin" to="/login">Login</Link>
                <button className="Button">
                    <Link className="headerSignin" to="/signup">Sign up</Link>
                </button>
            </div>
        </div>
    );
}

export default Header;