import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { initializeLoginFramework, signIn } from '../../firebase';
import { userContext } from '../View/View';

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
                    console.log(user);
                    setLoggedinUser(user);
                    if (user.loggedIn) history.replace(from);
                })
                .catch(error => console.log(error));
        } else {
            alert("Passwod must be matched with confirmend password")
        }
    }

    const divStyle = {
        marginTop: "5%",
        marginBottom: "5%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }

    const formStyle = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "75%"
    }
    const input = {
        height: "30px",
        width: "50vw",
        margin: "10px",
        borderRadius: "20px",
        paddingLeft: "10px",
        border: "1px solid black",
        outline: "none"
    }
    const submit = {
        backgroundColor: "#e51a4b",
        height: "30px",
        width: "50vw",
        margin: "10px",
        borderRadius: "20px",
        border: "0",
        outline: "none",
        cursor: "pointer",
        color: "white",
        fontWeignt: "500"
    }
    const error = {
        color: "red"
    }
    return (
        <div style={divStyle}>
            <form style={formStyle} onSubmit={handleSubmit(onSubmit)}>
                {errors.name && <span style={error}>*This field is required</span>}
                <input style={input} name="name" placeholder="Your name" ref={register({ required: true })} />

                {errors.email && <span style={error}>*This field is required</span>}
                <input style={input} name="email" placeholder="example@email.com" ref={register({ required: true })} />

                {errors.password && <span style={error}>*This field is required</span>}
                <input style={input} name="password" placeholder="your password" type="password" ref={register({ required: true })} />

                {errors.passwordConfirmed && <span style={error}>*This field is required</span>}
                <input style={input} name="passwordConfirmed" placeholder="confirm password" type="password" ref={register({ required: true })} />

                <input style={submit} type="submit" value="Sign up" />
                <Link to="/home/login" style={{ color: "red", textDecoration: "none", cursor: "pointer" }}>Already have an account?</Link>
            </form>
        </div>
    );
};

export default Signin;