import "./Home.css";
import Header from "../../Components/Header/Header.js";
import Footer from "../../Components/Footer/Footer";

function Home() {
  return (
    <div className="Pagina">
      <Header />
      <div className="ImagemFundo">
        <div className="container">
          <h1 className="TituloHome">SIGLA</h1>
          <div className="Subtitle">Nome do Grupo</div>
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
        </div>
      </div>

      <div>Where us?</div>
      <Footer />
    </div>
  );
}

export default Home;
