import React from 'react';
import HomePage from './pages/homepage/homepage.component'
import { Route, Link, Switch } from 'react-router-dom';
import './App.css'

const HatsPage = (props) => {
  return <div>
    <h1>HATS PAGE</h1>
  </div>
};

const JacketsPage = (props) => {
  return <div>
    <h1>JACKETS PAGE</h1>
  </div>
};

const SneakersPage = (props) => {
  return <div>
    <h1>SNEAKERS PAGE</h1>
  </div>
};

const MensPage = (props) => {
  return <div>
    <h1>MENS PAGE</h1>
  </div>
};

const WomensPage = (props) => {
  return <div>
    <h1>WOMENS PAGE</h1>
  </div>
};

function App() {
  return (
    <div>

        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop/hats' component={HatsPage} />
        <Route exact path='/shop/jackets' component={JacketsPage} />
        <Route exact path='/shop/mens' component={MensPage} />
        <Route exact path='/shop/womens' component={WomensPage} />
        <Route exact path='/shop/sneakers' component={SneakersPage} />

    </div>
  );
}

export default App;