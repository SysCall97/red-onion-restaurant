import React from 'react';
import { useForm } from 'react-hook-form';

const CheckoutLeft = props => {
    const { processDeliveryData, handleAddress, loggedinUser, activatePlaceOrder } = props;
    const { register, errors, handleSubmit } = useForm();

    const onSubmit = data => processDeliveryData(data);

    return (
        <div className="checkoutLeft">
            <div className="checkoutTitle">Edit Delivery Details</div>

            <form className="loginFormStyle" onSubmit={handleSubmit(onSubmit)}>

                <input className="loginInput" name="name" defaultValue={loggedinUser.name} ref={register({ required: true })} disabled />

                <input className="loginInput" name="email" defaultValue={loggedinUser.email} ref={register({ required: true })} disabled />

                {
                    !activatePlaceOrder &&
                    <>
                        <input className="loginInput" name="phoneNumber" placeholder="Mobile Number" ref={register({ required: true })} />
                        {errors.address && <span style={{ color: "red" }}>*This field is required</span>}

                        <textarea className="loginInput addressField" onChange={handleAddress} name="address" placeholder="Your Address" ref={register({ required: true })} />
                        {errors.address && <span style={{ color: "red" }}>*This field is required</span>}
                    </>
                }

                {
                    activatePlaceOrder &&
                    <>
                        <input className="loginInput" name="phoneNumber" defaultValue={loggedinUser.phoneNumber} ref={register({ required: true })} disabled />
                        <textarea className="loginInput addressField" onChange={handleAddress} name="address" defaultValue={loggedinUser.address} ref={register({ required: true })} disabled />
                    </>
                }

                <input className="loginSubmit" type="submit" value="Save and Continue" />

            </form>

        </div>
    );
};

export default CheckoutLeft;