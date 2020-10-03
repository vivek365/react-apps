import React, { lazy, Suspense } from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';

const Home = lazy(() => import('./LazyHome'));
const About = lazy(() => import('./LazyAboutUs'));


function LadyLoad() {
    return <>
        <h1>Lazy Loading Below Routes</h1>
        <div className="about-us nav-link">
            <NavLink to='/lazy/home'>Home</NavLink>
            <NavLink to='/lazy/about-us'>About Us</NavLink>
        </div>
        <Suspense fallback={<div>Loading...</div>}>
            <Route path="/lazy/home" component={Home} />
            <Route path="/lazy/about-us" component={About} />
        </Suspense>
    </>
}

export default LadyLoad;