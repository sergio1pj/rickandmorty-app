// Criar um conponente navbar usando NavBarElements 
import React from 'react';
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    } from './NavbarElements';

const Navbar = () => {
    return(
     <>
        <Nav>
            <Bars />
            <NavMenu>
                <NavLink to='/about'>About</NavLink>
            </NavMenu>
        </Nav>
     </>
    )
}

export default Navbar;



                

    
