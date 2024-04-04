import {Outlet} from "react-router-dom";
import styled from "styled-components";
import SideBar from "./SideBar.jsx";

const StyledAppLayout = styled.div`
  display: grid;
  grid-template-columns: 20rem 1fr;
  height: 100vh;
  overflow: hidden;
`;

const MContainer = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;

  background-color: var(--color-grey-50);
  overflow-y: hidden;
`;

const AppLayout = () => {
  return (
       <StyledAppLayout>
         <SideBar/>
         <MContainer>
           <Outlet/>
         </MContainer>
       </StyledAppLayout>
  );
};

export default AppLayout;