import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import GamePage from "./pages/GamePage";
import Header from "./components/header/Header";
import SearchPage from "./pages/SearchPage";
import Banner from "./components/banner/Banner";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Banner />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game/:id" element={<GamePage />} />
        <Route path="/searchpage" element={<SearchPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
