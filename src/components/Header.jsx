import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "./Header.css";

export default function Header() {
  return (
    <div>
      <div className="header-legal">
        <Link to="/">Home</Link>
        <p>|</p>
        <Link to="/contato">Contato</Link>
        <p>|</p>
        <Link to="/adminstrativo">Área Admin</Link>
      </div>
    </div>
  );
}
