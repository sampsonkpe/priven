import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import SplashScreen from "../components/SplashScreen";

const Splash = () => {
  const navigate = useNavigate();

  const goHome = () => {
    try {
      sessionStorage.setItem("priven_splash_seen", "1");
    } catch {
      // ignore
    }
    navigate("/home", { replace: true });
  };

  // Optional: skip splash if already seen this session
  useEffect(() => {
    try {
      if (sessionStorage.getItem("priven_splash_seen") === "1") {
        navigate("/home", { replace: true });
      }
    } catch {
      // ignore
    }
  }, [navigate]);

  return (
    <div className="grain-bg bg-background min-h-screen relative">
      <AnimatePresence mode="wait">
        <SplashScreen key="splash" onDismiss={goHome} />
      </AnimatePresence>
    </div>
  );
};

export default Splash;