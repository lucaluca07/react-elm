import React, { Component } from 'react';
import './App.scss';
import FirstPageHeader from './components/FirstPageHeader'
import Swiper from './components/Swiper'
import ShopList from './components/ShopList'
import Footer from './components/Footer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <FirstPageHeader/>
        <Swiper/>
        <ShopList/>
        <Footer/>
      </div>
    );
  }
}

export default App;
