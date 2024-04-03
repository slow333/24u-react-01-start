import { Outlet} from "react-router-dom";
import MainNav from "./MainNav.jsx";
import styled from "styled-components";

const Layout = styled.div`
  display: grid;
  grid-template-columns: 20rem auto;
  grid-template-rows: auto 1fr;
`

const Main = styled.main`
  &::before,
  &::after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;

    /* Creating animations for dark mode */
    transition: background-color 0.3s, border 0.3s;
  }
   margin: 3rem;
`

const AppLayout = () => {
  return (
    <Layout>
      <MainNav/>
      <Main>
        <Outlet/>
      </Main>
    </Layout>
  );
};

export default AppLayout;