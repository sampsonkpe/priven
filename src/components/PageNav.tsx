import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const navLinks = [
  { to: "/home", label: "Home" },
  { to: "/moments", label: "Moments" },
  { to: "/blessings", label: "Blessings" },
  { to: "/programme", label: "Programme" },
];

const PageNav = () => {
  const location = useLocation();

  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
      className="fixed top-0 left-0 right-0 z-30 bg-background/80 backdrop-blur-sm"
    >
      <div className="flex items-center justify-center gap-6 sm:gap-10 px-4 py-5">
        {navLinks.map((link) => {
          const isActive = location.pathname === link.to;
          return (
            <Link
              key={link.to}
              to={link.to}
              className={`relative font-body text-[9px] sm:text-[10px] tracking-[0.3em] uppercase transition-colors duration-300 pb-1.5 ${
                isActive
                  ? "text-primary"
                  : "text-muted-foreground/60 hover:text-foreground"
              }`}
            >
              {link.label}
              {isActive && (
                <motion.div
                  layoutId="nav-indicator"
                  className="absolute bottom-0 left-0 right-0 mx-auto w-4 h-px bg-primary"
                  transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
                />
              )}
            </Link>
          );
        })}
      </div>
    </motion.nav>
  );
};

export default PageNav;