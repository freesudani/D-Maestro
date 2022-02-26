import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home";
import Socials from "./pages/Socials";
import ToolsServices from "./pages/ToolsServices";
import Marketplace from "./pages/Marketplace";
import NotFound from "./pages/NotFound";
import CryptoContextProvider from "./store/crypto-context";
import NewsContextProvider from "./store/news-context";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

function App() {
  return (
    <div className="App">
      <NewsContextProvider>
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
      </NewsContextProvider>
    </div>
  );
}

export default App;
