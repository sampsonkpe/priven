import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ScrollToTop from "./components/ScrolltoTop";
import Splash from "./pages/Splash";
import Home from "./app/Home";

const App = () => (
  <BrowserRouter>
    <ScrollToTop />

    <Routes>
      <Route path="/" element={<Splash />} />
      <Route path="/home" element={<Home />} />

      {/* Temporarily disabled pages */}
      <Route path="/moments" element={<Navigate to="/home" replace />} />
      <Route path="/blessings" element={<Navigate to="/home" replace />} />
      <Route path="/programme" element={<Navigate to="/home" replace />} />

      {/* Safety fallback */}
      <Route path="*" element={<Navigate to="/home" replace />} />
    </Routes>
  </BrowserRouter>
);

export default App;