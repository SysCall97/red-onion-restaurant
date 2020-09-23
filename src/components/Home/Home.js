import { TextField } from '@material-ui/core';
import React from 'react';
import AdvertiseSection from '../AdvertiseSection/AdvertiseSection';
import FoodSection from '../FoodSection/FoodSection';

const Home = () => {
    return (
        <div>
            <div className="banner">
                <div className="bannerContent">
                    <h1 className="bannerText">BEST FOOD IS WAITING FOR YOU</h1> <br/>
                    <TextField
                        id="outlined-uncontrolled"
                        label="Search"
                        variant="outlined"
                        style={{width: "90%"}}
                    />
                </div>
            </div>

            <FoodSection />

            <AdvertiseSection />
        </div>
    );
};

export default Home;