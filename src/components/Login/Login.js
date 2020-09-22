import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { initializeLoginFramework, loginUser } from '../../firebase';
import { userContext } from '../View/View';

const Login = () => {
    initializeLoginFramework()
    const { register, errors, handleSubmit } = useForm();
    const [loggedinUser, setLoggedinUser] = useContext(userContext);
    const history = useHistory();
    const location = useLocation();

    const { from } = location.state || { from: { pathname: "/" } };


    const onSubmit = ({ email, password }) => {
        loginUser(email, password)
            .then(user => {
                console.log(user);
            })
            .catch(error => console.log(error));
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
        flexDirection:"column",
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
    return (
        <div style={divStyle}>
            <form style={formStyle} onSubmit={handleSubmit(onSubmit)}>
                <input style={input} name="email" placeholder="example@email.com" ref={register({ required: true })} />
                {errors.email && <span>This field is required</span>}

                <input style={input} name="password" placeholder="your password" type="password" ref={register({ required: true })} />
                {errors.password && <span>This field is required</span>}

                <input style={submit} type="submit" value="Log in" />
            <Link to="/home/signup" style={{color:"red", textDecoration:"none", cursor:"pointer"}}>Don't have an account?</Link>
            </form>
        </div>
    );
};

export default Login;