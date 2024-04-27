import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import GamePage from "./pages/GamePage";
import Header from "./components/header/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game/:id" element={<GamePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
