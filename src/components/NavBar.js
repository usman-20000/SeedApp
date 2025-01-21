import React, { useState } from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { colors } from "../assets/Data";

export default function NavBar(props) {

  const [showCart, setShowCart] = useState(props.cart);
  const [showSearch, setShowSearch] = useState(props.search);

  return (
    <div style={{ width: '100%', backgroundColor: colors.blueGrey }}>
      <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', paddingBottom: '2%', height: 60 }}>
        {showSearch && <input className="form-control me-2" type="search" onChange={props.handleText} placeholder="Search" aria-label="Search" style={{ marginTop: '1%', width: '40%', alignSelf: 'center' }} />}
      </div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid" style={{ backgroundColor: colors.blue }}>
          <a className="navbar-brand" href="#" style={{ color: colors.white }}>Agriculture App</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" style={{ color: colors.white }} to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" style={{ color: colors.white }} to="About">About</Link>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ color: colors.white }}>
                  Categories
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">New Laptops</a></li>
                  <li><a className="dropdown-item" href="#">Used Laptops</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#">Computer</a></li>
                </ul>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <Link className="nav-link" to="/Login" style={{ alignSelf: 'center', paddingRight: '5%', color: colors.white }}>Login</Link>
              <div style={{ alignItems: 'center', justifyContent: 'center', height: 40, width: 40, display: 'flex', alignSelf: 'center' }}>
                {showCart && <Link to="/Cart">
                  <img src={require('../../src/assets/images/cart.png')} height={25} width={25} />
                </Link>}
              </div>
            </form>
          </div>
        </div>
      </nav>
    </div>
  )
}