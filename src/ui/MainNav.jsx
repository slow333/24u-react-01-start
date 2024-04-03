import {HiDocumentPlus, HiHome} from "react-icons/hi2";
import styled from "styled-components";
import {NavLink} from "react-router-dom";

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 1.2rem;

    color: var(--color-grey-600);
    font-size: 1.6rem;
    font-weight: 500;
    padding: 1.2rem 2.4rem;
  }
  /* This works because react-router places the active class on the active NavLink */
  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-grey-800);
    cursor: pointer;
    border-radius: var(--border-radius-sm);
    outline: solid 1px var(--color-grey-300);
    background-color: var(--color-grey-200);
    transition: all 0.3s ease-in-out;
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-green-700);
    transition: all 0.3s;
  }

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: var(--color-brand-600);
    transition: all 0.4s;
  }
`;

const MainNav = () => {
  return (
    <NavList>
      <li><StyledNavLink to='/'><HiHome/>Home</StyledNavLink></li>
      <li><StyledNavLink to='advice'><HiDocumentPlus/>advice</StyledNavLink></li>
      <li><StyledNavLink to='faraway'><HiDocumentPlus/>FarAway</StyledNavLink></li>
    </NavList>
  );
};

export default MainNav;