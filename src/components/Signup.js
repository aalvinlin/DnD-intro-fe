import React from "react";
import { useForm } from "react-hook-form";
import logo from "../images/logo.png";

const Signup = () => {

    const { register, handleSubmit, watch, errors } = useForm();

    const onSubmit = data => {
        
        console.log(data);

    }

    return (
    <div className="content">
        <h1>D&amp;D Intro &ndash; Sign Up</h1>
        
        <div className="img-container">
            <img className="logo logo-small" src={logo}></img>
        </div>
        
        <div className="login-signup-form-container">

            <form onSubmit={handleSubmit(onSubmit)}>

                <div>
                    <label htmlFor="firstName">First name:</label>
                    <input name="firstName" ref={register({ required: true })} />
                    {errors.firstName && <p className="input-error">First name is required.</p>}
                </div>

                <div>
                    <label htmlFor="lastName">Last name:</label>
                    <input name="lastName" ref={register({ required: true })} />
                    {errors.lastName && <p className="input-error">Last name is required.</p>}
                </div>

                <div>
                    <label htmlFor="username">Username:</label>
                    <input name="username" ref={register({ required: true })} />
                    {errors.username && <p className="input-error">Username is required.</p>}
                </div>

                <div>
                    <label htmlFor="password">Password:</label>
                    <input name="password" type="password" ref={register({ required: true })} />
                    {errors.password && <p className="input-error">Password is required.</p>}
                </div>

                <button className="large-button signup">Sign Up</button>

            </form>
            
        </div>
    </div>
    );
}

export default Signup;