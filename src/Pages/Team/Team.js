import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import "./Team.css";
import Janier from "../HomeIndividual/usuario.png";
import Gabriel from "../../Components/Time_Fotos/Gabriel.png";

function Team() {
  return (
    <div>
      <Header />
      <div className="allPage">
        <div className="head">
          <h2 className="Titulo_2">Professor</h2>
        </div>
        <div className="foto">
          <img className="image-size" src={Janier} />
        </div>
        <div className="legenda_Foto">Janier Arias</div>

        <div className="head">
          <h2 className="Titulo_2">Students</h2>
        </div>
        <div className="container_aluno">
          <div>
            <div className="legenda_Foto">
              <img className="image-size" src={Gabriel} />
            </div>
            <div className="legenda_Foto">Gabriel Paschoalin</div>
          </div>
          <div>
            <div className="legenda_Foto">
              <img className="image-size" src={Janier} />
            </div>
            <div className="legenda_Foto">Sávio</div>
          </div>
          <div>
            <div className="legenda_Foto">
              <img className="image-size" src={Gabriel} />
            </div>
            <div className="legenda_Foto">Marielle</div>
          </div>
          <div>
            <div className="legenda_Foto">
              <img className="image-size" src={Janier} />
            </div>
            <div className="legenda_Foto">Charles</div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Team;
