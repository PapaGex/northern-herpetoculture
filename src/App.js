import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';

import AuthenticationPage from "./pages/authenticationPage/authenticationPage";
import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import ChewiePage from './pages/ChewiePage/chewiepage.component';
import LeachiePage from './pages/LeachiePage/leachiepage.component';
import EuroPage from './pages/EuroPage/europage.component';
import GeckoPage from './pages/GeckoPage/geckopage.component';
import SupplyPage from "./pages/SupplyPage/supplypage.component";
import ShopPage from './pages/browse/shop.component';
import { auth } from './firebase/firebase.utils';

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            currentUser: null
        };
    }

    unsubscribeFromAuth = null;

    componentDidMount() {
        this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
            this.setState({ currentUser: user });

            console.log(user);
        });
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }

    render() {
        return (
            <div>
                <Header currentUser={this.state.currentUser} />
                <Switch>
                    <Route exact path='/' component={HomePage}/>
                    <Route path='/chahuoa' component={ChewiePage}/>
                    <Route path='/leachieanus' component={LeachiePage}/>
                    <Route path='/eurodactylodes' component={EuroPage}/>
                    <Route path='/gecko' component={GeckoPage}/>
                    <Route path='/supply' component={SupplyPage}/>
                    <Route path='/shop' component={ShopPage}/>
                    <Route path='/authentication' component={AuthenticationPage}/>
                </Switch>
            </div>
        );
    }
}

export default App;
