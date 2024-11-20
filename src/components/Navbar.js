import React from "react";
import "./Navbar.css";
import AnchorLink from "react-anchor-link-smooth-scroll";



const Navbar = () => {
return(
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">CBD COMPANY</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav me-auto">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <AnchorLink className="nav-link" href="#collage">About</AnchorLink>
        </li>
        <li className="nav-item">
          <AnchorLink className="nav-link" href="#shopPage">Shop</AnchorLink>
        </li>
        <li className="nav-item">
          <AnchorLink className="nav-link" href="#contact">Contact</AnchorLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
)
}

export default Navbar;