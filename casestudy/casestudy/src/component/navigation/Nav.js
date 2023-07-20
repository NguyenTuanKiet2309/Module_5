import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Nav extends Component {
    render() {
        return (
          <div className="main_menu">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container">
            <a className="navbar-brand logo_h" href="index.html"><img src="casestudy/public/img/Logo.png" alt="" /></a> 
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
            <div className="collapse navbar-collapse offset" id="navbarSupportedContent">
              <ul className="nav navbar-nav menu_nav">
                <li className="nav-item active"><a className="nav-link" href="index.html">Home</a></li>
                <li className="nav-item"><a className="nav-link" href="about.html">About</a></li>
                <li className="nav-item submenu dropdown">
                  <a href="/#" className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Service</a>
                  <ul className="dropdown-menu">
                    <li><link to="/customer" /></li>
                    <li className="nav-item"><a className="nav-link" href="/#">Villa</a></li>
                    <li className="nav-item"><a className="nav-link" href="/#">House</a></li>
                    <li className="nav-item"><a className="nav-link" href="/#">Room</a></li>
                  </ul>
                </li>
                <li className="nav-item"><a className="nav-link" href="about.html">Employee</a></li>
                <li className="nav-item"><a className="nav-link" href="about.html">Customer</a></li>
                <li className="nav-item"><a className="nav-link" href="about.html">Contract</a></li>
              </ul>
            </div>
            <ul className="social-icons ml-auto">
              <li><a href="/#"><i className="fab fa-facebook-f" /></a></li>
              <li><a href="/#"><i className="fab fa-linkedin-in" /></a></li>
              <li><a href="/#"><i className="fab fa-twitter" /></a></li>
              <li><a href="/#"><i className="fab fa-google-plus-g" /></a></li>
              <li><a href="/#"><i className="fas fa-rss" /></a></li>
            </ul>
          </div>
        </nav>
      </div>
        );
    }
}

export default Nav;