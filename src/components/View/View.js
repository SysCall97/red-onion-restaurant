import React, { useState } from 'react';
import { 
    BrowserRouter as Router,
    Route, 
    Switch 
} from 'react-router-dom';
import Home from '../Home/Home';
import Footer from '../Footer/Footer';
import NoMatch from '../NoMatch/NoMatch';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Signin from '../Signin/Signin';
import Navbar from '../Navbar/Navbar';

export const userContext = React.createContext();

const View = () => {
    const [loggedinUser, setLoggedinUser] = useState({});
    return (
        <Router>
            <Header />
            {/* <Navbar /> */}
            <userContext.Provider value={[loggedinUser, setLoggedinUser]}>
            <Switch>

                <Route exact path="/">
                    <Home />
                </Route>

                <Route path="/home">
                    <Home />
                </Route>

                <Route path="/login">
                    <Login />
                </Route>

                <Route path="/signup">
                    <Signin />
                </Route>

                <Route path="*">
                    <NoMatch />
                </Route>

            </Switch>
            </userContext.Provider>
            <Footer />
        </Router>
    );
};

export default View;