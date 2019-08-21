import React from 'react';
import { Router, Route, Switch } from "react-router";
import { createBrowserHistory } from "history";
import MainPage from './pages/Main';
import AboutPage from './pages/About';

const history = createBrowserHistory();

export const Routing = () => (
    <Router history={history}>
        <Switch>
            <Route exact path="/" component={MainPage}/>
            <Route path="/about" component={AboutPage}/>
        </Switch>
    </Router>
)