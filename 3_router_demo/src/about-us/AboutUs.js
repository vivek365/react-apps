import React from 'react';
import { NavLink, Route } from 'react-router-dom';
import Service from './service/Service';
import './AboutUs.css';

function AboutUs() {
    return <>
        <h1>About Us Page</h1>
        <div className="about-us nav-link">
            <NavLink to='/about-us/service/1'>Service 1</NavLink>
            <NavLink to='/about-us/service/2'>Service 2</NavLink>
            <NavLink to='/about-us/render-props'>Service 3</NavLink>
        </div>
        <Route path='/about-us/service/:id' component={Service}></Route>
        <Route path='/about-us/render-props' render={() => <Service id="3" name="Renderer Service"></Service>}></Route>
    </>
}

export default AboutUs;