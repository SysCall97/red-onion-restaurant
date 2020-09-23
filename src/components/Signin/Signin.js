import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { initializeLoginFramework, signIn } from '../../firebase';
import { userContext } from '../View/View';
import logo from "../../images/logo2.png";

const Signin = () => {
    initializeLoginFramework()
    const { register, errors, handleSubmit } = useForm();
    const [loggedinUser, setLoggedinUser] = useContext(userContext);
    const history = useHistory();
    const location = useLocation();

    const { from } = location.state || { from: { pathname: "/" } };

    // const hash = (str) => {
    //     return str.split('').reduce((prevHash, currVal) =>
    //         (((prevHash << 5) - prevHash) + currVal.charCodeAt(0)) | 0, 0);
    // }

    const onSubmit = ({ name, email, password, passwordConfirmed }) => {
        if (password === passwordConfirmed) {
            signIn(name, email, password)
                .then(user => {
                    if (user.loggedIn) {
                        setLoggedinUser(user);
                        history.replace(from);
                    }
                })
        } else {
            alert("Passwod must be matched with confirmend password")
        }
    }
    return (
        <div className="loginDivStyle">
            <form className="loginFormStyle" onSubmit={handleSubmit(onSubmit)}>
                <img src={logo} alt=""  height="50vh" />
                {errors.name && <span className="error">*This field is required</span>}
                <input  className="loginInput" name="name" placeholder="Your name" ref={register({ required: true })} />

                {errors.email && <span className="error">*This field is required</span>}
                <input className="loginInput" name="email" placeholder="example@email.com" ref={register({ required: true })} />

                {errors.password && <span className="error">*This field is required</span>}
                <input className="loginInput" name="password" placeholder="your password" type="password" ref={register({ required: true })} />

                {errors.passwordConfirmed && <span className="error">*This field is required</span>}
                <input className="loginInput" name="passwordConfirmed" placeholder="confirm password" type="password" ref={register({ required: true })} />

                <input className="loginSubmit" type="submit" value="Sign up" />
                <Link to="/login" style={{ color: "red", textDecoration: "none", cursor: "pointer" }}>Already have an account?</Link>
            </form>
        </div>
    );
};

export default Signin;