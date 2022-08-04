import React from "react";
import { NavLink, Outlet } from "react-router-dom";

import logoLight from "../../images/coffee_beans_logo.svg";
import logoDark from "../../images/coffee_beans_logo_dark.svg";
import logoLongDark from "../../images/beans_logo_dark.svg";

import "./navigation.css";

class Navigation extends React.Component {
  render() {
    return (
      <>
        <header>
          <nav className="header">
            <NavLink to="/" className="nav_item">
              {/* <img src={logoLight} alt="Logo" /> */}
              Coffee house
            </NavLink>
            <NavLink to="/ourCoffee" className="nav_item">
              Our Coffee
            </NavLink>
            <NavLink to="/forYourPleasure" className="nav_item">
              For your pleasure
            </NavLink>
          </nav>
          <div className="menu">
            <input type="checkbox" id="menuToggle" />
            <label htmlFor="menuToggle" className="burgerLabel">
              <div className="burger">
                <div className="elem first"></div>
                <div className="elem second"></div>
                <div className="elem third"></div>
              </div>
            </label>
            <div className="menu_items">
              <ul className="menu_items_list">
                <li className="menu_item">
                  <NavLink to="/" className="nav_item">
                    <img src={logoLight} alt="Logo" />
                    Coffee house
                  </NavLink>
                </li>
                <li className="menu_item">
                  <NavLink to="/ourCoffee" className="nav_item">
                    Our Coffee
                  </NavLink>
                </li>
                <li className="menu_item">
                  <NavLink to="/forYourPleasure" className="nav_item">
                    For your pleasure
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </header>
        <Outlet />
        <footer>
          <nav className="footer">
            <NavLink to="/" className="footer_nav">
              {/* <img src={logoDark} alt="Logo" /> */}
              Coffee house
            </NavLink>
            <NavLink to="/ourCoffee" className="footer_nav">
              Our Coffee
            </NavLink>
            <NavLink to="/forYourPleasure" className="footer_nav">
              For your pleasure
            </NavLink>
          </nav>
          <img className="footer_logo" src={logoLongDark} alt="logo" />
        </footer>
      </>
    );
  }
}

export default Navigation;
