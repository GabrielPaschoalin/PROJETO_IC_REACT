import usuario from './usuario.png';
import './Home.css';
import Header from '../../Components/Header/Header.js'
import Footer from '../../Components/Footer/Footer'

function Home() {
  return (
    <div className="Pagina">
      <Header/>
      <div className="Home">
        <div className="left-home">
            <div className="Foto">
              <img src={usuario} />
            </div>
            <div className="Links">
              <h3>Group Links</h3>
              <ul>
                  <li><a href='http://macro.ppgee.ufmg.br/'>MACRO Group </a></li>
                  <li><a href='http://150.164.32.17/site-litc/'>LITC Laboratory </a></li>
              </ul>
              <h3>More</h3>
              <ul>
                  <li><a href='http://buscatextual.cnpq.br/buscatextual/visualizacv.do?metodo=apresentar&id=K4295052E6'>Curriculum Lattes</a></li>
                  <li><a href='https://scholar.google.com.br/citations?user=QHrai7UAAAAJ&hl=pt-BR'>Google Scholar</a></li>
              </ul>
            </div>
        </div>
        <div className="Right-home">
            <h1 className='Titulo'> About </h1>
            <div className='About'>
            <p>
              I'm an assistant professor with the Department of Electronic Engineering (DELT) and a permanent member of the Graduate Program in Electrical Engineering (PPGEE), at the Federal University of Minas Gerais (UFMG), Brazil. Since 2016 member of the Mechatronics, Control, and Robotics research group (MACRO) and an associate professor in the Computational Intelligence Laboratory (LITC). 
            </p>
            <p>
            I received the BS degree in Engineering Physics from the University of Cauca (Colombia 2007) and MS and Doctor degree, both in Mechatronic Systems from the University of Brasilia (UnB 2010 and 2014, respectively). 
            </p>
            </div>
            
            <h1 className='Titulo'> Research Interests </h1>
            <div className='About'>
            <p>
            Briefly, I research computer architecture, systems, hardware security, and intelligence for embedded systems. My work focus now is on energy efficiency spanning to theory and practice of using reconfigurable hardware systems and their synthesis tools to describe better circuit synthesis techniques allowing a controlled trade-off among stability, numerical accuracy, and key design parameters such as area, performance, power, etc.          </p>
            <p>
            At present, I have been working on the development of embedded systems for high-performance Gabriel’s graph classifiers using reconfigurable hardware architectures, as well as digital circuits for processing and execution of chaotic cryptosystems. Recently, I have become especially interested in focusing on emerging memory paradigms (in-memory processing), avoiding the old von Neumann paradigm to be applied in latency-sensitive applications into the new edge computing parading.           </p>
            </div>
        </div>
        
      </div>
      <Footer/>
    </div>
  );
}

export default Home;
