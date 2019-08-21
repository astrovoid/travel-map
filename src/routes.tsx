import React from 'react';
import { Router, Route, Switch } from "react-router";
import { createBrowserHistory } from "history";
import MainPage from './pages/Main';
import AboutPage from './pages/About';

const history = createBrowserHistory();

const Routing = () => (
    <Router history={history}>
        <Switch>
            <Route path="/" component={MainPage}/>
            <Route path="/about" component={AboutPage}/>
        </Switch>
    </Router>
)