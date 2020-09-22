import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { Link } from 'react-router-dom';
import logo from "../../images/logo2.png";
import { notificationContext } from '../../App';
import { getDatabaseCart } from '../../utilities/databaseManager';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

const Navbar = () => {
    const classes = useStyles();
    const [total, setTotal] = useContext(notificationContext);
    const cart = getDatabaseCart();
    const newTotal = Object.entries(cart).reduce((total, item) => total+item[1], 0);
    setTotal(newTotal);
    return (
        <div className={classes.root}>
            <AppBar position="static" color='transparent'>
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        <Link to="/">
                            <img src={logo} alt="" width="12%" />
                        </Link>
                    </Typography>
                    <div className="right">
                    <div><ShoppingCartOutlinedIcon /><div style={{
                        position: "absolute",
                        top: "3px",
                        right: "15%",
                        color: "red",
                        fontWeight: "500"
                    }}>{total}</div></div>
                    <Link style={{color: "black", textDecoration: "none"}} to="/home/login">Login</Link>
                    <Button variant="contained" color="secondary">
                        <Link style={{color: "white", textDecoration: "none"}} to="/home/signup">Sign up</Link>
                    </Button>
                </div>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default Navbar;