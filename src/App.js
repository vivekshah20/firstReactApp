import React, { Component } from 'react';
import './App.css';
import{
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import header from './components/header';
import Foot from './components/Foot';
import Nav from './components/Nav';
import Aerial from './pages/Aerial';
import Landscape from './pages/Landscape';
import Nature from './pages/Nature';

class App extends Component {
  render() {
    return (
        <Router>
      <div className="App">
        <header/>
          <div class="container content">
              <div class="row">
                  <div class="col-7 content">
                      <Route exact path='/' component={Aerial}/>
                      <Route exact path='/Landscape' component={Landscape}/>
                      <Route exact path='/Nature' component={Nature}/>
                  </div>
                  <div class="col-3 list">
                <Nav/>
                  </div>
              </div>
          </div>
        <Foot/>
      </div>
        </Router>
    );
  }
}

export default App;
