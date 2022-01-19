import React from 'react'
import { NavItem, NavLink } from 'reactstrap'
import NavBar from '../components/NavBar'
import Breadcrumbs from './Breadcrumbs'


const Header = () => {
    return (
        <div>
            <NavBar />
            <Breadcrumbs />
        </div>


    )
}

export default Header