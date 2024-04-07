import GlobalStyles from "./styles/GlobalStyles.js";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import AppLayout from "./main/AppLayout.jsx";
import Home from "./pages/Home.jsx";
import Advice from "./pages/Advice.jsx";
import PageNotFound from "./ui/PageNotFound.jsx";
import FarAway from "./pages/FarAway.jsx";
import PizzaMenu from "./pages/PizzaMenu.jsx";
import JsReviewsBooks from "./pages/JsReviewsBooks.jsx";
import DateCount from "./pages/DateCount.jsx";
import Accordions from "./pages/Accordions.jsx";
import TipCalc from "./pages/TipCalc.jsx";
import SplitBill from "./pages/SplitBill.jsx";

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
            <Route path='date-count' element={<DateCount/>}/>
            <Route path='accordions' element={<Accordions/>}/>
            <Route path='tip-calc' element={<TipCalc/>}/>
            <Route path='split' element={<SplitBill/>}/>
            <Route path='*' element={<PageNotFound/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
