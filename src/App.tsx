import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Splash from "./pages/Splash";
import Home from "./app/Home";
import Blessings from "./pages/Blessings";
import Programme from "./pages/OrderOfService";
// import Moments from "./pages/Moments"; // keep commented for now if you’re removing Moments

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Splash />} />
      <Route path="/home" element={<Home />} />

      <Route path="/blessings" element={<Blessings />} />
      <Route path="/programme" element={<Programme />} />

      {/* Redirect old links (optional but recommended) */}
      <Route path="/order-of-service" element={<Navigate to="/programme" replace />} />

      {/* If Moments is paused */}
      {/* <Route path="/moments" element={<Moments />} /> */}

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  </BrowserRouter>
);

export default App;