import React from 'react';
import logo from './logo.svg';
import './App.css';
import DashboardNav from './components/dashboardnav/DashboardNav';
import DashboardMain from './components/dashboardmain/DashboardMain';

function App() {
  return (
    <div className="App">
      <DashboardNav />
      <DashboardMain />
      <h1>react appp is heere</h1>
    </div>
  );
}

export default App;
