import Header from "./components/Header";
import BreakfastPage from "./components/BreakfastPage";

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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
