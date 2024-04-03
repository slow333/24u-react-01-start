import styled from "styled-components";
import MainNav from "./MainNav.jsx";

const StyledSideBar = styled.aside`
   background-color: var(--color-grey-0);
   padding: 3rem 2rem;
   border-right: 1px solid var(--color-grey-100);
   grid-row: 1/-1;
   display: flex;
   flex-direction: column;
   gap: 3.2rem;
`

function SideBar() {
  return (
    <StyledSideBar>
      <MainNav />
    </StyledSideBar>
  );
}

export default SideBar