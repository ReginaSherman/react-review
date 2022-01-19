import React from 'react'
import { Nav, NavItem, NavLink, Breadcrumb, BreadcrumbItem } from 'reactstrap'


const NavBar = () => {
    return (
        
        <Nav className='navigation'>
          <NavItem>
            <NavLink active href="#">Craigslist</NavLink>
          </NavItem>
          <NavItem className='right'>
            <NavLink href="#">help</NavLink>
          </NavItem>
          <NavItem className='right'>
            <NavLink href="#">safety</NavLink>
          </NavItem>
          <NavItem className='right'>
            <NavLink href="#">privacy</NavLink>
          </NavItem>
          <NavItem className='right'>
            <NavLink href="#">feedback</NavLink>
          </NavItem>
          <NavItem className='right'>
            <NavLink href="#">terms</NavLink>
          </NavItem>
          
        </Nav>
    )
}

export default NavBar