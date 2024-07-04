import { BrowserRouter, Routes, Route } from "react-router-dom";
import LogInPage from "./pages/LogInPage"
import Maps from "./pages/Maps"
import Home from "./pages/Home"
import MintNFT from "./pages/MintNFT";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<LogInPage />} />
        <Route path="home" element={<Home />} />
        <Route path="maps" element={<Maps />} />
        <Route path="mint" element={<MintNFT />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
