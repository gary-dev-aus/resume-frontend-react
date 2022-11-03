import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <nav>
      <Link to="/">
        <h2>Gary Zhang</h2>
      </Link>
      <Link to="/portfolio">Portfolio</Link>
      <Link to="/knowledge">Knowledge</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
}
