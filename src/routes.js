import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import HomePage from './components/Home/HomePage';
import AboutPage from './components/About/AboutPage';
import CarPage from './components/Car/CarPage';
import CarDetails from './components/Car/CarDetails';
import CarMain from './components/Car/CarMain';
import CarColor from './components/Car/Details/CarColor';
import CarMake from './components/Car/Details/CarMake';
import CarHistory from './components/Car/Details/carHistory';

export default (
  <Route path = "/" component = {App} >
    <IndexRoute component = {HomePage}></IndexRoute>
    <Route path="about" component = {AboutPage}></Route>
		<Route path="car" component = {CarMain}>
      <IndexRoute component={CarPage}></IndexRoute>
      <Route path="carDetails" component={CarDetails}>
        <IndexRoute component={CarColor}></IndexRoute>
        <Route path="carMake" component={CarMake}></Route>
        <Route path="carHistory" component={CarHistory}></Route>
      </Route>
    </Route>
  </Route>
);
