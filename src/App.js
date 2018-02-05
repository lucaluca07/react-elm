import React, { Component } from 'react';
import './App.less';
import FirstPageHeader from './components/FirstPageHeader'

class App extends Component {
  render() {
    return (
      <div className="App">
        <FirstPageHeader/>
      </div>
    );
  }
}

export default App;
