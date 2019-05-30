import React from 'react';
import './App.css';
import CardContainer from './components/CardComponents/CardContainer';
import HeaderContainer from './components/HeaderComponents/HeaderContainer';

const App = () => {
  return (
    <div className="App">
      <HeaderContainer />
      <CardContainer />
    </div>
  );
};

export default App;
