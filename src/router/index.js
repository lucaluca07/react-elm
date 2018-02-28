import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../containers/Home"
import Discover from '../containers/Discover'
import Order from '../containers/Order'
import My from '../containers/My'
import Footer from '../components/Footer'

export default class RouterMap extends React.Component {
  render() {
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
                <Switch>
                    <Route path="/search" component={My} />
                    <Footer/>
                </Switch>
               
                </div>
            </Router>
        </div>
    );
  }
}
