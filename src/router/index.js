import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../containers/Home";
import Discover from "../containers/Discover";
import Order from "../containers/Order";
import My from "../containers/My";
import Search from "../containers/Search";
import Location from "../containers/Location";
import Shop from "../containers/Shop";
import Footer from "../components/Footer";
import SearchResult from "../containers/SearchResult";
import ShopDetail from "../containers/ShopDetail";
import Login from "../containers/Login";
import User from "../containers/User"
import Address from "../containers/Address"
import AddAddress from "../containers/AddAddress"
import SearchAddress from "../containers/SearchAddress"

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
              <Route exact path="/my" component={My} />
            </Switch>
            <Switch>
              <Route exact path="/search" component={Search} />
              <Route exact path="/search/shop" component={SearchResult} />
              <Route path="/location" component={Location} />
              <Route exact path="/shop" component={Shop} />
              <Route path="/shop/:id" component={ShopDetail} />
              <Route path="/login/:redirect?" component={Login} />
              <Route path="/user" component={User} />
              <Route exact path="/my/address" component={Address} />
              <Route exact path="/my/address/add" component={AddAddress} />
              <Route exact path="/my/address/search" component={SearchAddress} />
              <Route exact path="/my/address/edit" component={AddAddress} />
              <Footer />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}
