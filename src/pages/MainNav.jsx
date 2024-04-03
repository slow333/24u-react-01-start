import {NavLink} from "react-router-dom";
import styled from "styled-components";
import { HiHome,HiDocumentPlus  } from "react-icons/hi2";

const NavContainer = styled.ul`
   grid-row: 1/-1;
  display: flex;
  flex-direction: column;
   gap: 3rem;
   background-color: var(--color-grey-100);
   padding: 7rem 1rem 0;
   font-weight: 600;
`;

const NavItem =styled(NavLink)`
   display: flex;
   justify-content: center;
   align-items: center;
   gap: 1rem;
   font-size: 2rem;
   transition: all 0.5s;
   &:hover {
      color: var(--color-red-700);
   }
`;

function MainNav() {
  return (
    <NavContainer>
      <li><NavItem to='/'><HiHome/>Home</NavItem></li>
      <li><NavItem to='advice'><HiDocumentPlus/>advice</NavItem></li>
      <li><NavItem to='faraway'><HiDocumentPlus/>FarAway</NavItem></li>
    </NavContainer>
  );
}

export default MainNav