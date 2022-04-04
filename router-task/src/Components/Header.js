import React from 'react'
import {Navbar,NavbarToggler,Collapse,Nav,NavItem} from 'reactstrap'
import './header.css'
import {NavLink} from 'react-router-dom'

function Header() {
  return (
    <div>
  <Navbar
    color="dark"
    expand="md"
    light
  >
    <NavbarToggler />
    <Collapse navbar>
      <Nav
        className="me-auto"
        navbar
      >
         <NavItem>
          <NavLink to={"/"}>
            Home
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to={"/about"}>
            About
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to={"/users"}>
            Users
          </NavLink>
        </NavItem>
      </Nav>
    </Collapse>
  </Navbar>
</div>
  )
}

export default Header