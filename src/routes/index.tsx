// routes
import React, {FC, ReactElement} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from "../pages/Home";
import About from "../pages/About";
/**
 * Define app routes.
 * @constructor
 * @return {ReactElement}
 */
const AppRoute: FC = (): ReactElement => {
    return (
        <Router>
            <Switch>
                <Route exact path='/' component={Home}></Route>
                <Route exact path='/about' component={About}></Route>
            </Switch>
        </Router>
    );
};

export default AppRoute;