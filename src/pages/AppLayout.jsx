import { Outlet} from "react-router-dom";
import MainNav from "./MainNav.jsx";
import styled from "styled-components";

const Main = styled.main`
   margin: 2rem 2rem 0 3rem;
   border: 1px solid var(--color-grey-100);
   height: 100vh;
   padding: 1rem 2rem;
`

const AppLayout = () => {
  return (
    <>
      <MainNav/>
      <Main>
        <Outlet/>
      </Main>
    </>
  );
};

export default AppLayout;