import React, { useEffect, useState } from 'react'
import { useTheme } from '@emotion/react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAlignRight } from '@fortawesome/free-solid-svg-icons'
import { useLocation } from 'react-router-dom';

import {
  Nav,
  NavbarBrand,
  NavbarButton,
  HamburgerButton
} from './Navbar.styles';
import Container from '../../layouts/Container';
import Button from '../Button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const theme = useTheme();
  const location = useLocation();

  const toggleIsOpen = () => setIsOpen(!isOpen);
  const closeNavbar = () => setIsOpen(false);

  useEffect(() => {
    closeNavbar();
  }, [location])



  return (
    <Nav isOpen={isOpen}>
      <Container
        flex
        justifyContent='space-between'
        alignItems='center'
        direction='row'
        flexWrap='wrap'
      >
        <NavbarBrand onClick={closeNavbar} theme={theme} to="/">
          YOAPP
        </NavbarBrand>
        <HamburgerButton theme={theme} onClick={toggleIsOpen}>
          <FontAwesomeIcon icon={faAlignRight} />
        </HamburgerButton>
        <NavbarButton theme={theme}>
          <Link onClick={closeNavbar} to='/signin'>
            <Button
              mobileFluid
              gutterBottomMobile
              gutterRight
            >
              SIGN IN
          </Button>
          </Link>
          <Link onClick={closeNavbar} to='/signup'>
            <Button
              mobileFluid
              outlined
            >
              SIGN UP
            </Button>
          </Link>
        </NavbarButton>
      </Container>
    </Nav>
  )
}

export default Navbar;
