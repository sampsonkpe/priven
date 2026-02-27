import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrolltoTop";
import Home from "./app/Home";
// import Moments from "./pages/Moments";
import Blessings from "./pages/Blessings";
import Programme from "./pages/OrderOfService";

const App = () => (
  <BrowserRouter>
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/moments" element={<Moments />} /> */}
      <Route path="/moments" element={<Home />} /> {/* TEMPORARY: redirect to Home until Moments page is ready */}
      <Route path="/blessings" element={<Blessings />} />
      <Route path="/programme" element={<Programme />} />
    </Routes>
  </BrowserRouter>
);

export default App;