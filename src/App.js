import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Workers from "./pages/Workers";
import Positions from "./pages/Positions";
import Academics from "./pages/Academics";

function App() {
  return (
    <div className="container">
      <Header />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/worker" element={<Workers />} />
          <Route path="/position" element={<Positions />} />
          <Route path="/academic" element={<Academics />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
