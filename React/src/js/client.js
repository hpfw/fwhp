import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux"
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import Home from "./pages/Home";
import Einsaetze from "./pages/Einsaetze";
import Fahrzeuge from "./pages/Fahrzeuge";
import Login from "./pages/Login";
import Layout from "./pages/Layout";
import store from "./store";


const app = document.getElementById('app');

ReactDOM.render(
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/" component={Layout}>
                <IndexRoute component={Home}></IndexRoute>
                <Route path="einsaetze" name="einsaetze" component={Einsaetze}></Route>
                <Route path="fahrzeuge" name="fahrzeuge" component={Fahrzeuge}></Route>
            </Route>
        </Router>
    </Provider>,
app);
