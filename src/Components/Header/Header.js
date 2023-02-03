import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "./UFMG.png";

function Header() {
  return (
    <nav class="navbar">
      <Container>
        <Link to="/">
          <img class="logo" src={logo}></img>
        </Link>
        <ul class="list">
          <li class="item">
            <Link to="/">Home</Link>
          </li>

          <li class="item">
            <Link to="/Team">Team</Link>
          </li>
        </ul>
      </Container>
    </nav>
  );
}

export default Header;
