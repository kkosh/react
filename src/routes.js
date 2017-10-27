import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import HomePage from './components/Home/HomePage';
import AboutPage from './components/About/AboutPage';
import CarPage from './components/Car/CarPage';

export default (
  <Route path = "/" component = {App} >
    <IndexRoute component = {HomePage}></IndexRoute>
    <Route path = "about" component = {AboutPage}></Route>
    <Route path = "car" component = {CarPage}></Route>
  </Route>
);
