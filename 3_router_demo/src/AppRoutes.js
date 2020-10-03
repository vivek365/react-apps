import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AboutUs from './about-us/AboutUs';
import ContactUs from './contact-us/ContactUs';
import ErrorPage from './error-page/ErrorPage';
import Home from './home/Home';
import LadyLoad from './lazy-load/LazyLoad';

function AppRoutes() {
    return <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/about-us" component={AboutUs} />
        <Route path="/contact-us" component={ContactUs} />
        <Route path="/lazy" component={LadyLoad} />
        <Route component={ErrorPage} />
    </Switch>
}

export default AppRoutes; 