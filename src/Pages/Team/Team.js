import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import "./Team.css";
import Janier from "../User/usuario.png";
import Gabriel from "../../Components/Time_Fotos/Gabriel.png";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function Team() {
  return (
    <div className="Pagina">
      <Header />
      <h1 className="model-title">Professor</h1>
      <div className="divider"></div>
      <div className="members">
        <div className="member">
          <img class="imagem" width={200} height={200} src={Janier} />
          <div className="description">
            <h1>Janier Arias</h1>
            <h2></h2>
            <p>
              Assistant professor with the Department of Electronic Engineering
              (DELT) at the Federal University of Minas Gerais (UFMG), Brazil
            </p>
            <div className="social-media">
              <ExitToAppIcon
                onClick={() => {
                  window.open("/user", "_blank");
                }}
              />
              <LinkedInIcon
                onClick={() => {
                  window.open(
                    "https://www.linkedin.com/in/janier-arias-garcía-88aa7575/",
                    "_blank"
                  );
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <h1 className="model-title">Students</h1>
      <div className="divider"></div>
      <div className="members">
        <div className="member">
          <img class="imagem" width={200} height={200} src={Gabriel} />
          <div className="description">
            <h1>Gabriel Dias</h1>
            <h2></h2>
            <p>
              Técnico em Automação Industrial pelo Instituto Federal de Minas
              Gerais (IFMG). Aluno de Graduação em Engenharia de Controle e
              Automação pela Universidade Federal de Minas Gerais (UFMG)
            </p>
            <div className="social-media">
              <ExitToAppIcon
                onClick={() => {
                  window.open("/user", "_blank");
                }}
              />
              <LinkedInIcon
                onClick={() => {
                  window.open(
                    "https://www.linkedin.com/in/gabriel-henrique-lara-paschoalin-dias-356940198/",
                    "_blank"
                  );
                }}
              />
            </div>
          </div>
        </div>
        <div className="member">
          <img class="imagem" width={200} height={200} src={Janier} />
          <div className="description">
            <h1>Janier Arias</h1>
            <h2></h2>
            <p>
              Assistant professor with the Department of Electronic Engineering
              (DELT) at the Federal University of Minas Gerais (UFMG), Brazil
            </p>
            <div className="social-media">
              <ExitToAppIcon
                onClick={() => {
                  window.open("/user", "_blank");
                }}
              />
              <LinkedInIcon
                onClick={() => {
                  window.open(
                    "https://www.linkedin.com/in/janier-arias-garcía-88aa7575/",
                    "_blank"
                  );
                }}
              />
            </div>
          </div>
        </div>
        <div className="member">
          <img class="imagem" width={200} height={200} src={Gabriel} />
          <div className="description">
            <h1>Gabriel Dias</h1>
            <h2></h2>
            <p>
              Técnico em Automação Industrial pelo Instituto Federal de Minas
              Gerais (IFMG). Aluno de Graduação em Engenharia de Controle e
              Automação pela Universidade Federal de Minas Gerais (UFMG)
            </p>
            <div className="social-media">
              <ExitToAppIcon
                onClick={() => {
                  window.open("/user", "_blank");
                }}
              />
              <LinkedInIcon
                onClick={() => {
                  window.open(
                    "https://www.linkedin.com/in/gabriel-henrique-lara-paschoalin-dias-356940198/",
                    "_blank"
                  );
                }}
              />
            </div>
          </div>
        </div>
        <div className="member">
          <img class="imagem" width={200} height={200} src={Janier} />
          <div className="description">
            <h1>Janier Arias</h1>
            <h2></h2>
            <p>
              Assistant professor with the Department of Electronic Engineering
              (DELT) at the Federal University of Minas Gerais (UFMG), Brazil
            </p>
            <div className="social-media">
              <ExitToAppIcon
                onClick={() => {
                  window.open("/user", "_blank");
                }}
              />
              <LinkedInIcon
                onClick={() => {
                  window.open(
                    "https://www.linkedin.com/in/janier-arias-garcía-88aa7575/",
                    "_blank"
                  );
                }}
              />
            </div>
          </div>
        </div>{" "}
      </div>

      <Footer />
    </div>
  );
}

export default Team;
