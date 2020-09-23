import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { initializeLoginFramework, loginUser } from '../../firebase';
import { userContext } from '../View/View';
import logo from "../../images/logo2.png";

const Login = () => {
    initializeLoginFramework();
    const { register, errors, handleSubmit } = useForm();
    const [loggedinUser, setLoggedinUser] = useContext(userContext);
    const history = useHistory();
    const location = useLocation();

    const { from } = location.state || { from: { pathname: "/" } };


    const onSubmit = ({ email, password }) => {
        loginUser(email, password)
            .then(user => {
                if (user.loggedIn) {
                    setLoggedinUser(user);
                    history.replace(from);
                }
            })
    }

    return (
        <div className="loginDivStyle">
            <form className="loginFormStyle" onSubmit={handleSubmit(onSubmit)}>
                <img src={logo} alt=""  height="50vh" />
                <input className="loginInput" name="email" placeholder="example@email.com" ref={register({ required: true })} />
                {errors.email && <span>This field is required</span>}

                <input className="loginInput" name="password" placeholder="your password" type="password" ref={register({ required: true })} />
                {errors.password && <span>This field is required</span>}

                <input className="loginSubmit" type="submit" value="Log in" />
                <Link to="/signup" className="loginLink">Don't have an account?</Link>
            </form>
        </div>
    );
};

export default Login;