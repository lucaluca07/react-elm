import React, { Component } from 'react';
import './App.scss';
import FirstPageHeader from './components/FirstPageHeader'
import Swiper from './components/Swiper'
import ShopList from './components/ShopList'
import Footer from './components/Footer'
import EleH5HomeModel from './fetch'

class App extends Component {
  componentDidMount(){
    EleH5HomeModel.getEntriesData().then(data => {console.log(data)})
  }
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
