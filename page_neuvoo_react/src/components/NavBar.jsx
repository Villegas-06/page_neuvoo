/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'
import '../pages/styles/Navbar.css'
import Neuvoo_logo from '../pages/images/neuvoo-logo-page.png'
export class NavBar extends Component {
    render() {
        return (
        <div className="conatiner mb-5">
          <nav className="navbar navbar-expand-lg bg-dark navbar-dark Navbar_bg">
                <a className="navbar-brand" href="#">
                    <img className="Navbar_logo" src={Neuvoo_logo} alt="neuvoo"/>
                </a>
              <button
                className="navbar-toggler nav_btn 
                justify-content-center;"
                type="button"
                data-toggle="collapse"
                data-target="#navbarResponsive"
                aria-controls="navbarResponsive"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon nav_btn " />
              </button>
              <div
                className="nav_colapse collapse navbar-collapse Navbar_text"
                id="navbarResponsive"
              >
                <ul className="navbar-nav nav_li_text Navbar_text">
                  <li className="nav-item ">
                    <a className="nav-link" href="#">
                     Link
                    </a>
                  </li>
                  <li className="nav-item ">
                    <a className="nav-link" href="#">
                        Link
                    </a>
                  </li>
                  
                  <li className="nav-item ">
                    <a className="nav-link" href="#">
                      Link
                    </a>
                 </li>
                </ul>
              </div>

          </nav>
      </div>
        );
    }
}

export default NavBar
