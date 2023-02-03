import "./Home.css";
import Header from "../../Components/Header/Header.js";
import Footer from "../../Components/Footer/Footer";
import GoogleApiWrapper from "./Mapa.js";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Home() {
  return (
    <div className="Pagina">
      <Header />

      <div className="containerHome">
        <div className="texto">
          <h1 className="TituloHome">SIGLA</h1>
          <h1 className="Subtitle">Nome do Grupo</h1>
        </div>
      </div>

      <div className="Page-inferior">
        <div className="About-us">
          <h2 class="About-title">ABOUT US</h2>
          <p class="About-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed massa
            sem, efficitur molestie auctor a, accumsan eget libero. Sed ac
            tortor fringilla, tempor leo vitae, consectetur lectus. Vivamus
            condimentum scelerisque enim et iaculis. Morbi egestas nunc nec enim
            aliquam finibus. Phasellus nec leo at libero convallis sagittis.
            Vivamus nec nibh ut velit tristique cursus sed consequat turpis.
            Nunc sollicitudin ligula in felis tincidunt, a aliquet arcu sodales.
          </p>
          <div className="Team-button">
            <Button
              variant="dark"
              size="lg"
              onClick={() => {
                window.open("/team");
              }}
            >
              DISCOVER OUR TEAM
            </Button>
          </div>
        </div>

        <div className="About-us">
          <h2 class="About-title">WHERE ARE WE?</h2>
          <div className="Mapa">
            <GoogleApiWrapper />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
