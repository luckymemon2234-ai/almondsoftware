import { Link, useLocation } from "react-router-dom";
import "../styles/BottomNav.css";

export default function BottomNav() {
  const location = useLocation();

  // Removing standard framer-motion here to save mobile performance. 
  // It doesn't need to animate in, just stick to the bottom instantly like a native app.
  return (
    <nav className="bottom-nav" aria-label="Mobile Navigation">
      <Link to="/" className={location.pathname === "/" ? "active" : ""}>
        <span aria-hidden="true">🏠</span>
        <span>Home</span>
      </Link>

      <Link to="/about" className={location.pathname === "/about" ? "active" : ""}>
        <span aria-hidden="true">👤</span>
        <span>About</span>
      </Link>

      <Link to="/services" className={location.pathname === "/services" ? "active" : ""}>
        <span aria-hidden="true">⚙️</span>
        <span>Services</span>
      </Link>

      <Link to="/creations" className={location.pathname === "/creations" ? "active" : ""}>
        <span aria-hidden="true">💼</span>
        <span>Work</span>
      </Link>

      <Link to="/contact" className={location.pathname === "/contact" ? "active" : ""}>
        <span aria-hidden="true">✉️</span>
        <span>Contact</span>
      </Link>
    </nav>
  );
}