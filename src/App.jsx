import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import GamePage from "./pages/GamePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game/:id" element={<GamePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
