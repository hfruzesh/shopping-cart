import React from 'react'
import { Link } from "react-router-dom";
import logo from '../logo512.png'

const MainNavbar = () => {
  return (

    <nav className="navbar bg-dark d-flex justify-content-around align-items-bottom py-3">


      <Link className="" to="/" >
        <img className="mr-4" src={logo} />
        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-5"></li>
        </ul>
      </Link>
      <Link className="" to="/about" >About</Link>
      <Link className="ml-auto" to="/cart" >Cart</Link>
    </nav>


  )
}

export default MainNavbar
