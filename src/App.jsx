import React from 'react';
import BumarkFont from './fonts/bumark-font';
import Yanus from './fonts/yanus-font';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';
import Content from './components/Content';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <BumarkFont />
        <Yanus />
        <Header />
          <Content />
        <Footer />
      </div>
    );
  }
}

export default App;
