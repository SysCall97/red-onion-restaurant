import { TextField } from '@material-ui/core';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AdvertiseSection from '../AdvertiseSection/AdvertiseSection';
import FoodSection from '../FoodSection/FoodSection';
import ItemDetails from '../ItemDetails/ItemDetails';
import Login from '../Login/Login';
import Signin from '../Signin/Signin';

const Home = () => {
    return (
        <div>
            <div className="banner">
                <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
                    <h1 style={{fontFamily: "Andale Mono, monospace", fontSize: "30px"}}>BEST FOOD IS WAITING FOR YOU</h1> <br/>
                    <TextField
                        id="outlined-uncontrolled"
                        label="Search"
                        defaultValue="Food name"
                        variant="outlined"
                        style={{width: "90%"}}
                    />
                </div>
            </div>

                <Switch>

                <Route exact path="/">
                        <FoodSection />
                    </Route>

                    <Route exact path="/home">
                        <FoodSection />
                    </Route>
                
                    <Route path="/home/signup">
                        <Signin />
                    </Route>

                    <Route path="/home/login">
                        <Login />
                    </Route>

                    <Route path="/home/item/:id">
                        <ItemDetails />
                    </Route>

                </Switch>

            <AdvertiseSection />
        </div>
    );
};

export default Home;