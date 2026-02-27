import { useNavigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import SplashScreen from "../components/SplashScreen";

const Splash = () => {
  const navigate = useNavigate();

  return (
    <div className="grain-bg bg-background min-h-screen relative">
      <AnimatePresence mode="wait">
        <SplashScreen
          key="splash"
          onDismiss={() => navigate("/home", { replace: true })}
        />
      </AnimatePresence>
    </div>
  );
};

export default Splash;