import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./app/Home";
import Moments from "./pages/Moments";
import Blessings from "./pages/Blessings";
import OrderOfService from "./pages/OrderOfService";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/moments" element={<Moments />} />
      <Route path="/blessings" element={<Blessings />} />
      <Route path="/order-of-service" element={<OrderOfService />} />
    </Routes>
  </BrowserRouter>
);

export default App;