import React from 'react';
import { render } from 'react-dom';
import './style.css';
import Header from './Header/index';
import Footer from './Footer/index';

const App = () => (
  <div className="container">
    <Header />
    <Footer />
  </div>
);

render(<App />, document.querySelector('#app'));
