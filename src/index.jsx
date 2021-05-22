import React from 'react';
import { render } from 'react-dom';
import './style.css';
import Header from './Header/index';
import Footer from './Footer/index';
import Home from './Home/index';
import Reservation from './Reservation/index';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Header />
      <Link to="/">
        <Home />
      </Link>
      <Link to="/reservation">
        <Reservation />
      </Link>
      <Switch>
        <Route path="/" exact></Route>
        <Route path="/reservation"></Route>
      </Switch>
      <Footer />
    </Router>
  );
};

render(<App />, document.querySelector('#app'));
