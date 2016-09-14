import React from 'react';
import ReactDOM from 'react-dom';

import css from '../styles/main.scss';


import {Router, Route, IndexRoute, hashHistory} from 'react-router';

import Layout from './pages/Layout';
import Home from './pages/Home';
import Login from './pages/Login';
import About from './pages/About';
import Contact from './pages/Contact';

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Layout}>
            <IndexRoute component={Login}></IndexRoute>
            <Route path="about" component={About}></Route>
            <Route path="contact" component={Contact}></Route>
        </Route>
    </Router>
    , document.getElementById('app'));