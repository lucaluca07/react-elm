import React from "react";
import createHistory from "history/createHashHistory";
import {
  ConnectedRouter,
  routerReducer,
  routerMiddleware,
  push
} from "react-router-redux";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import Home from "../containers/Home"
import Discover from '../containers/Discover'
import Order from '../containers/Order'
import My from '../containers/My'
import Footer from '../components/Footer'

export default class RouterMap extends React.Component {
  render() {
    const history = createHistory();
    return (
        <div>
            <Router>
                <div>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/discover" component={Discover} />
                    <Route path="/order" component={Order} />
                    <Route path="/my" component={My} />
                </Switch>
                <Footer/>
                </div>
            </Router>
            
        </div>
    );
  }
}
