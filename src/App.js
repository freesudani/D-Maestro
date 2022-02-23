import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home";
import Socials from "./pages/Socials";
import ToolsServices from "./pages/ToolsServices";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/welcome" />} />
        <Route path="/welcome" element={<Home />} />
        <Route path="/tools" element={<ToolsServices />} />
        <Route path="/socials" element={<Socials />} />
      </Routes>
    </div>
  );
}

export default App;
