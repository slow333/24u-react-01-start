import GlobalStyles from "./styles/GlobalStyles.js";
import Advice from "./components/Advice.jsx";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import AppLayout from "./pages/AppLayout.jsx";
import Home from "./pages/Home.jsx";
import PageNotFound from "./components/PageNotFound.jsx";

function App() {

  return (
    <>
      <GlobalStyles/>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout/>}>
            <Route index element={<Navigate replace to='home'/>}/>
            <Route path='home' element={<Home/>}/>
            <Route path='advice' element={<Advice/>}/>
            <Route path='*' element={<PageNotFound/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
