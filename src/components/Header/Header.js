import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { notificationContext } from '../../App';
import logo from "../../images/logo2.png";
import { getDatabaseCart } from '../../utilities/databaseManager';
import { signOut } from '../../firebase';
import { userContext } from '../View/View';


const Header = () => {
    const [total, setTotal] = useContext(notificationContext);
    const [loggedinUser, setLoggedinUser] = useContext(userContext);
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
                {
                    !loggedinUser.loggedIn && 
                    <>
                        <Link className="headerLogin" to="/login">Login</Link>

                        <Link to="/signup">
                            <button className="Button headerSignin">Sign up</button>
                        </Link>
                    </>
                }
                {
                    loggedinUser.loggedIn && 
                    <button className="Button headerSignin" onClick = {() => {
                        signOut();
                        setLoggedinUser({});
                    }}>
                        Sign out({loggedinUser.name})
                    </button>
                }
                
            </div>
        </div>
    );
}

export default Header;