import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ScrollToTop from "./components/ScrolltoTop";
import Splash from "./pages/Splash";
import Home from "./app/Home";
// import Moments from "./pages/Moments";
import Blessings from "./pages/Blessings";
import Programme from "./pages/OrderOfService";

const App = () => (
  <BrowserRouter>
    <ScrollToTop />

    <Routes>
      <Route path="/" element={<Splash />} />
      <Route path="/home" element={<Home />} />

      {/* Moments paused for now */}
      {/* <Route path="/moments" element={<Moments />} /> */}
      <Route path="/moments" element={<Home />} />

      <Route path="/blessings" element={<Blessings />} />
      <Route path="/programme" element={<Programme />} />

      {/* Safety fallback */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  </BrowserRouter>
);

export default App;