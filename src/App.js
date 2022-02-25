import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home";
import Socials from "./pages/Socials";
import ToolsServices from "./pages/ToolsServices";
import Marketplace from "./pages/Marketplace";
import NotFound from "./pages/NotFound";
import CryptoContextProvider from "./store/crypto-context";

function App() {
  return (
    <div className="App">
      <CryptoContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Navigate to="/welcome" />} />
          <Route path="/welcome" element={<Home />} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/tools" element={<ToolsServices />} />
          <Route path="/socials" element={<Socials />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </CryptoContextProvider>
    </div>
  );
}

export default App;
