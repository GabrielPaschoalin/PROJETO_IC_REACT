import "./Home.css";
import Header from "../../Components/Header/Header.js";
import Footer from "../../Components/Footer/Footer";
//import FotoTime from ""

function Home() {
  return (
    <div className="Pagina">
      <Header />
        <div>
          Aqui terá uma imagem do time
        </div>
        <div>
          About the Group
        </div>
        <div>
          Where us?
        </div>
      <Footer />
    </div>
  );
}

export default Home;
