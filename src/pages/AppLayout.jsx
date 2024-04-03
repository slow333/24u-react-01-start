import {Outlet} from "react-router-dom";
import styled from "styled-components";
import Header from "../ui/Header.jsx";
import SideBar from "../ui/SideBar.jsx";

const StyledAppLayout = styled.div`
   display: grid;
   grid-template-columns: 20rem 1fr;
   grid-template-rows: auto 1fr;
   height: 100vh;
   overflow: hidden;
`;

const Main = styled.main`
   background-color: var(--color-grey-50);
   padding: 0;
   //overflow-y: scroll;
`;

const Container = styled.div`
   max-width: 100rem;
   margin: 0 auto;
   display: flex;
   flex-direction: column;
   //gap: 3.2rem;
   height: 100%;
`;

const AppLayout = () => {
  return (
    <StyledAppLayout>
      <SideBar/>
      <Header>Far Away</Header>
      <Main>
        <Container>
          <Outlet/>
        </Container>
      </Main>
    </StyledAppLayout>
  );
};

export default AppLayout;