import React, { Component } from "react";
import { Link } from "react-router-dom";
export class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menus: [
        { pageName: "Home", path: "/home" },
        { pageName: "Login", path: "/login" },
        { pageName: "Logout", path: "/logout" },
        { pageName: "Contact", path: "/contact" },
      ],
      login: localStorage.getItem("token") ? true : false,
      currentUrl: window.location.pathname + window.location.search,
    };
    this.logout = this.logout.bind(this);
    this.menuClick = this.menuClick.bind(this);
  }

  menuClick(e) {
    let currentUrl = window.location.pathname + window.location.search;
    let obj = {
      currentUrl: currentUrl,
    };
    if (currentUrl === "/logout") {
      localStorage.removeItem("token");
      obj["login"] = false;
    }
    this.setState(obj);
  }

  logout() {
    localStorage.removeItem("token");
    this.setState({ login: false });
  }

  render() {
    return (
      <header className="header_area sticky-header">
        <div className="main_menu">
          <nav className="navbar navbar-expand-lg navbar-light main_box">
            <div className="container">
              <Link className="navbar-brand logo_h" to="/">
                <img src="../../assets/img/logo.png" alt="" />
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <div
                className="collapse navbar-collapse offset"
                id="navbarSupportedContent"
              >
                <ul className="nav navbar-nav menu_nav ml-auto">
                  {this.state.menus.map((obj, index) => {
                    if (this.state.login) {
                      return (
                        <li
                          onClick={this.menuClick}
                          key={obj.pageName}
                          className={
                            "nav-item " +
                            (this.state.currentUrl === obj.path ? "active" : "")
                          }
                        >
                          <Link className="nav-link" exact to={obj.path}>
                            {obj.pageName}
                          </Link>
                        </li>
                      );
                    } else {
                      return (
                        <li
                          onClick={this.menuClick}
                          key={obj.pageName}
                          className={
                            "nav-item " +
                            (this.state.currentUrl === obj.path ? "active" : "")
                          }
                        >
                          <Link className="nav-link" exact to={obj.path}>
                            {obj.pageName}
                          </Link>
                        </li>
                      );
                    }
                  })}
                  <li className="nav-item submenu dropdown">
                    <a
                      href="/#"
                      className="nav-link dropdown-toggle"
                      data-toggle="dropdown"
                      role="button"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Shop
                    </a>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <a className="nav-link" href="category.html">
                          Shop Category
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="single-product.html">
                          Product Details
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="checkout.html">
                          Product Checkout
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="cart.html">
                          Shopping Cart
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="confirmation.html">
                          Confirmation
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item submenu dropdown">
                    <a
                      href="/#"
                      className="nav-link dropdown-toggle"
                      data-toggle="dropdown"
                      role="button"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Blog
                    </a>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <a className="nav-link" href="blog.html">
                          Blog
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="single-blog.html">
                          Blog Details
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item submenu dropdown">
                    <a
                      href="/#"
                      className="nav-link dropdown-toggle"
                      data-toggle="dropdown"
                      role="button"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Pages
                    </a>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <a className="nav-link" href="login.html">
                          Login
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="tracking.html">
                          Tracking
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="elements.html">
                          Elements
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="contact.html">
                      Contact
                    </a>
                  </li>
                </ul>
                <ul className="nav navbar-nav navbar-right">
                  <li className="nav-item">
                    <a href="/#" className="cart">
                      <span className="ti-bag"></span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <button className="search">
                      <span className="lnr lnr-magnifier" id="search"></span>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
        <div className="search_input" id="search_input_box">
          <div className="container">
            <form className="d-flex justify-content-between">
              <input
                type="text"
                className="form-control"
                id="search_input"
                placeholder="Search Here"
              />
              <button type="submit" className="btn"></button>
              <span
                className="lnr lnr-cross"
                id="close_search"
                title="Close Search"
              ></span>
            </form>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
