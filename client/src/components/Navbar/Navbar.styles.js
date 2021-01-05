import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Nav = styled.nav`
  padding-top: 2.5em;
  position: relative;
  @media (max-width: 700px){
    transition: max-height .500ms;
    max-height: ${({ isOpen }) => isOpen ? '1000px' : '60px'};
    overflow: hidden;
    padding-top: 1em;
  }
`;

export const NavbarBrand = styled(Link)`
  color: ${({ theme }) => theme.color.primary.dark};
  font-family: 'Saira', sans-serif;
  font-weight: 600;
  font-size: 2.5em;
  text-decoration: none;

  @media (max-width: 700px){
    font-size: 2em;
  }
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