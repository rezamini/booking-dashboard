import React, { useEffect } from 'react';
import Navbar from 'react-bootstrap/Navbar';

function DashboardNav() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">
        <img
          alt=""
          src=""
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '}
        Dashboard
      </Navbar.Brand>
      </Navbar>
    </div>
  );
}

export default DashboardNav;
