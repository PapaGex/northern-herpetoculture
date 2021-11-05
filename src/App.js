import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';

import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import ChewiePage from './pages/ChewiePage/chewiepage.component';
import LeachiePage from './pages/LeachiePage/leachiepage.component';
import EuroPage from './pages/EuroPage/europage.component';
import GeckoPage from './pages/GeckoPage/geckopage.component';
import SupplyPage from "./pages/SupplyPage/supplypage.component";
import ShopPage from './pages/browse/shop.component';

function App() {
    return (
       <div >
            <Header />
                <Switch>
                <Route exact path ='/' component={HomePage} />
                <Route path ='/chahuoa' component={ChewiePage} />
                <Route path ='/leachieanus' component={LeachiePage} />
                <Route path ='/eurodactylodes' component={EuroPage} />
                <Route path ='/gecko' component={GeckoPage} />
                <Route path ='/supply' component={SupplyPage} />
                <Route path ='/shop' component={ShopPage} />
                </Switch>
        </div>
    );
}

export default App;
