import {HiDocumentPlus, HiHome, HiOutlineBookOpen } from "react-icons/hi2";
import { SiYourtraveldottv } from "react-icons/si";
import { PiPizza } from "react-icons/pi";
import styled from "styled-components";
import StyledNavLink from "../ui/StyledNavLink.jsx";

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const MainNav = () => {
  return (
    <NavList>
      <li><StyledNavLink to='/'><HiHome/>Home</StyledNavLink></li>
      <li><StyledNavLink to='advice'><HiDocumentPlus/>advice</StyledNavLink></li>
      <li><StyledNavLink to='faraway'><SiYourtraveldottv/>FarAway</StyledNavLink></li>
      <li><StyledNavLink to='pizza-menu'><PiPizza/>Pizza Menu</StyledNavLink></li>
      <li><StyledNavLink to='books'><HiOutlineBookOpen/>Books</StyledNavLink></li>
    </NavList>
  );
};

export default MainNav;