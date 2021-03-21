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

const Navbar = ({toggle}) => {
    return (
       <>
        <Nav>
            <NavBarContainer>
                <NavLogo to="/">isiah</NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="about">About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="discover">Discover</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="services">Services</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="contact">Contact</NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to='/contact'>Contact</NavBtnLink>
                    </NavBtn>
            </NavBarContainer>
        </Nav>
       </>
    );
};

export default Navbar;
