import React from 'react';
import {FaBars} from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import {
    Nav, 
    NavBarContainer, 
    NavLogo, 
    MobileIcon, 
    NavMenu, 
    NavItem, 
    NavLinks,
    NavBtn,
    NavBtnLink
} from './navbarelements';

const Navbar = () => {
    return (
       <>
        <Nav>
            <NavBarContainer>
                <NavLogo to="/">isiah</NavLogo>
                    <MobileIcon>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to='about'>About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='discover'>Discover</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='services'>Services</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='contact'>Contact</NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavLink to='/contact'>Contact</NavLink>
                    </NavBtn>
            </NavBarContainer>
        </Nav>
       </>
    );
};

export default Navbar;
