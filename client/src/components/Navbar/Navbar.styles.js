import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Nav = styled.nav`
  padding-top: 2.5em;
  position: relative;
  /* max-height: 100px */
  @media (max-width: 700px){
    transition: max-height .500ms;
    max-height: ${({ isOpen }) => isOpen ? '1000px' : '90px'};
    overflow: hidden;
  }
`;

export const NavbarBrand = styled(Link)`
  color: ${({ theme }) => theme.color.primary.dark};
  font-family: 'Saira', sans-serif;
  font-weight: 600;
  font-size: 2em;
  text-decoration: none;
`;

export const HamburgerButton = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 1.5em;
  color: ${({ theme }) => theme.color.primary.dark};
  &:hover{
    color: ${({ theme }) => theme.color.primary.light};
  }
  @media(max-width: 700px){
    display: block;
  }
`;

export const NavbarButton = styled.div`
  display: flex;
  @media(max-width: 700px){
    display: block;
    margin-top: .8em;
    flex-basis: 100%;
  }
`;