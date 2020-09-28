import React from 'react';
import Dashboard from './dashboard';
import Navigation from './navigation';
import './App.scss';

const App = () => {
  return (
    <div className="App">
      <Navigation></Navigation>
      <Dashboard></Dashboard>
    </div>
  );
};

export default App;
