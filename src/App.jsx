import GlobalStyles from "./styles/GlobalStyles.js";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import AppLayout from "./pages/AppLayout.jsx";
import Home from "./pages/Home.jsx";
import Advice from "./components/advice/Advice.jsx";
import PageNotFound from "./ui/PageNotFound.jsx";
import FarAway from "./pages/FarAway.jsx";
import PizzaMenu from "./pages/PizzaMenu.jsx";
import JsReviewsBooks from "./pages/JsReviewsBooks.jsx";

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
            <Route path='faraway' element={<FarAway/>}/>
            <Route path='pizza-menu' element={<PizzaMenu/>}/>
            <Route path='books' element={<JsReviewsBooks/>}/>
            <Route path='*' element={<PageNotFound/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
