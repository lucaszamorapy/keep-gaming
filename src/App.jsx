import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import GamePage from "./pages/GamePage";
import Header from "./components/header/Header";
import SearchPage from "./pages/SearchPage";
import Footer from "./components/Footer";
import ScrollToTopOnPageChange from "./components/ScrollToTopOnPageChange";
import Developers from "./pages/Developers";
import DevelopersPage from "./pages/DevelopersPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <ScrollToTopOnPageChange />
        <main className="AppBody">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/game/:id" element={<GamePage />} />
            <Route path="/searchpage" element={<SearchPage />} />
            <Route path="/developers" element={<Developers />} />
            <Route path="/developer/:id" element={<DevelopersPage />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
