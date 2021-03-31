import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './core/components/Navbar';
import Home from './pages/Home';
import Result from './pages/Result';
import Search from './pages/Search';

const Routes = () => (
    <BrowserRouter>
        <Navbar />
        <Switch>
            <Route path="/" exact>
                <Home />
            </Route>
            <Route path="/search">
                <Search />
            </Route>
            <Route path="/result">
                <Result />
            </Route>
        </Switch>
    </BrowserRouter>
);

export default Routes;