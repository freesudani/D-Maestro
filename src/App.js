import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home";
import Socials from "./pages/Socials";
import ToolsServices from "./pages/ToolsServices";
import Marketplace from "./pages/Marketplace";
import NotFound from "./pages/NotFound";
import Locations from "./pages/Locations";
import CryptoIndex from "./pages/CryptoIndex";
import AllContextProviders from "./store/AllContextProviders";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Accounting from "./pages/Accounting";
import Broker from "./pages/Broker";
import Legal from "./pages/Legal";

function App() {
  return (
    <div className="App">
      <AllContextProviders>
        <Navbar />
        <Routes>
          <Route path="/" element={<Navigate to="/welcome" />} />
          <Route path="/welcome" element={<Home />} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/tools" element={<ToolsServices />} />
          <Route path="/socials" element={<Socials />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/index" element={<CryptoIndex />} />
          <Route path="/accounting" element={<Accounting />} />
          <Route path="/broker" element={<Broker />} />
          <Route path="/legal" element={<Legal />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AllContextProviders>
    </div>
  );
}

export default App;
