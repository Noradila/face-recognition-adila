import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <header>
        <div className="Navbar">

      
            <Link to="/">Home</Link>
           
          <div className="dropdown">
            <button className="dropbtn">
            Facial Recognition
            </button>
              <div className="dropdown-content">
                <Link to="/photo">Photo</Link>
                <Link to="/camera">Camera</Link>
              </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
