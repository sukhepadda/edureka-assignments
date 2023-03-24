import Header from "./components/Header";
import BreakfastPage from "./components/BreakfastPage.jsx";
import LunchPage from "./components/LunchPage.jsx";
import SnacksPage from "./components/SnacksPage.jsx";
import DinnerPage from "./components/DinnerPage.jsx";
import DrinksPage from "./components/DrinksPage.jsx";
import NightLifePage from "./components/NightLifePage.jsx";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./styles/App.css";
import "./styles/Header.css";
import "./styles/QuickSearch.css";
import "./styles/MediaQueries.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element=<Header /> />
          <Route path="/breakfast" element=<BreakfastPage /> />
          <Route path="/lunch" element=<LunchPage /> />
          <Route path="/snacks" element=<SnacksPage /> />
          <Route path="/dinner" element=<DinnerPage /> />
          <Route path="/drinks" element=<DrinksPage /> />
          <Route path="/nightlife" element=<NightLifePage /> />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
