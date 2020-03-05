import React from 'react';
import logo from './logo.svg';
import './App.css';
import DashboardNav from './components/dashboardnav/DashboardNav';
import DashboardMain from './components/dashboardmain/DashboardMain';
import MachinesDiv from './components/machinesDiv/MachinesDiv';

function App() {
  return (
    <div className="App">
      <DashboardNav />
      <DashboardMain />
      <MachinesDiv />

    </div>
  );
}

export default App;
