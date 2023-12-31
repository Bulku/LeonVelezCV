import Description from "@/components/Description";
import KnowledgeCard from "@/components/knowledgeCard";
import Social from "@/components/Social";
import IncrementalBar from "@/components/IncrementalBar";
import ExtraInformation from "@/components/ExtraInformation";
import { EducationItem } from "@/components/EducationItem";
import Portafolio from "@/components/Portafolio";
import React from "react";
import Dialogtop from "@/components/Dialogtop";

const Index = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value: string) => {
    setOpen(false);
  };

  return (
    <div className="bg-[#dadada] flex h-full max-h-max w-auto">
      <Dialogtop open={open} selectedValue="" onClose={handleClose} />
      <aside className="gap-15 px-5 py-2 top-0 bg-black flex-col flex h-full w-[330px] fixed text-white">
        <section>
          <div className="flex flex-col items-center gap-2 mt-12">
            <img
              className="h-[150px] w-[150px] rounded-xl"
              src="images/FotoHDV.jpg"
              alt="Profile pic"
            />
            <div>
              <span className="font-bold text-xl">Leon Mateo </span>
              <span className="text-xl font-bold text-[#fbbf24]">Velez</span>
            </div>
            <div>
              <span className="font-bold text-[#fbbf24]">Front-end</span>
              <span className="font-bold text-[#ffffff]">Developer</span>
            </div>
          </div>
          <br></br>
        </section>
        <hr></hr>
        <section className="flex flex-col items-center">
          <table>
            <tbody>
              <tr>
                <td>Edad:</td>
                <td className="float-right">24</td>
              </tr>
              <tr>
                <td>Departamento:</td>
                <td className="float-right">Antioquia</td>
              </tr>
              <tr>
                <td>Ciudad:</td>
                <td className="float-right">Medellin</td>
              </tr>
              <tr>
                <td>Correo:</td>
                <td className="float-right">
                  leoteobulku@gmail.com
                </td>
              </tr>
              <tr>
                <td>Identificación</td>
                <td className="float-right">1216728793</td>
              </tr>
            </tbody>
          </table>
        </section>
        <hr></hr>
        <section>
          <br></br>
          <h2>
            <b>Idiomas</b>
          </h2>
          <IncrementalBar percentage={70} name="Ingles" />
          <IncrementalBar percentage={90} name="Español" />
          <IncrementalBar percentage={20} name="Italiano" />
          <br></br>
        </section>
        <hr></hr>
        <section>
          <br></br>
          <h2>
            <b>Lenguajes de Programación</b>
          </h2>
          <IncrementalBar percentage={70} name="Javascript" />
          <IncrementalBar percentage={75} name="C++" />
          <IncrementalBar percentage={30} name="C#" />
          <IncrementalBar percentage={35} name="Ionic" />
          <br></br>
        </section>
        <hr></hr>
        <section>
          <br></br>
          <h2>
            <b>Habilidades Extras</b>
          </h2>
          <ExtraInformation name="Buena Comunicación" />
          <ExtraInformation name="Capacidad de Adaptabilidad" />
          <ExtraInformation name="Atención a los Detalles" />
        </section>
      </aside>
      <div className="w-[23%]"></div>
      <main className="max-w-7xl">
        <section className=" flex justify-center flex-wrap ">
          <div className="m-10 mt-0 w-full flex justify-between text-justify gap-6 bg-[#000000] min-w-max rounded-b-2xl">
            <div className="flex flex-col p-16">
              <h2 className="mt-10 mb-1 font-bold text-5xl text-white">Soy Leon Mateo Velez Gonzalez</h2>
              <div className="mb-5 mt-1 font-bold text-5xl flex">
                <h2 className="mr-2 font-medium text-[#fbbf24]">Front-End</h2>
                <h2>Developer</h2>
              </div>
              <h4 className="mb-2 font-medium text-[#ffffff] whitespace-normal max-w-xl">
                Me apasiona la tecnología desde muy temprana edad, actualmente soy desarrollador Junior de Front End y tengo el deseo de fortalecer mis conocimientos sobre programación y hacer uso de mis habilidades blandas para tener un buen desempeño como profesional
              </h4>
              <div>
                <button className="bg-white text-center px-6 py-3 hover:scale-105 hover: text-[#fbbf24] font-bold rounded-md mt-7" onClick={handleClickOpen}>
                  <span className="text-md font-semibold">Saber Más ➜</span>
                </button>
              </div>
            </div>
            <div className="flex justify-center">
              <img className="m-auto mb-1 mx-10 w-80 rounded-xl hover:bg-[#fbbf24]" src="images/FotoHDV.jpg" alt="foto personal" style={{ marginLeft: "right", opacity: 0.8, transition: "transform 0.2s" }} onMouseOver={(e) => { e.currentTarget.style.transform = "scale(1.02)"; }} onMouseOut={(e) => { e.currentTarget.style.transform = "scale(1)"; }} />
            </div>
          </div>
        </section>
        <section>
          <div className="flex justify-center flex-wrap my-10">
            <Description title="Mi Conocimiento" text="Gracias a la formación que he recibido, tengo conocimientos sobre programación Front End, Frameworks, Sistemas Arquitectónicos y Programación Mobile. Fuera del mundo de la programación, he adquirido conocimientos para desempeñarme con soltura en el entorno Audiovisual; por último, he incursionado en la programación de videojuegos." />
          </div>
          <div className="flex justify-center flex-wrap my-5 bg-">
            <KnowledgeCard rute="images/movil.png" title="Desarrollo Móvil" description="Ionic" />
            <KnowledgeCard rute="images/web.png" title="Desarrollo Web" description="Blog, E-commerce" />
            <KnowledgeCard rute="images/juego.png" title="Desarrollo de Videojuegos" description="Blender, Unity, Unreal Engine" />
            <KnowledgeCard rute="images/video.png" title="Edición de Video" description="Filmora, Adobe Premier" />
            <KnowledgeCard rute="images/grafico.png" title="Diseñador Gráfico" description="Photoshop" />
          </div>
        </section>
        <section>
          <div className="flex justify-center flex-wrap ">
            <Description title="Educación" text="Aquí destacamos los logros académicos y los lugares que han formado mi trayectoria." />
          </div>
          <div className="rounded-md ">
            <EducationItem almaMatter="Instituto Técnico Industrial Pascual Bravo" fechas="Enero 2010 - Noviembre 2015" grado="Bachillerato Técnico" estado="Estado: Terminado" descripcion="Culminé exitosamente mi proceso dentro de la educación primaria y secundaria, sumado a la obtención del título como técnico industrial enfocado en sistemas." />
            <EducationItem almaMatter="ITM" fechas="Enero 2016 - Mayo 2017" grado="Ingeniería de Sistemas" descripcion="Estudié varios semestres en el ITM de Ingeniería de sistemas, hasta que cambié a la Universidad de Antioquia. Recomiendo mucho este centro de formación." estado="Estado: Incompleto" />
            <EducationItem almaMatter="Universidad de Antioquia: Ingenieria de Sistemas" fechas="Agosto 2017 - Noviembre 2023" grado="Carrera Profesional" descripcion="Me encuentro estudiando Ingenieria de Sistemas en la Universidad de Antioquia, donde tambien represento a la U en Tkd y UdeRap, miembro activo de la comunidad universitaria" estado="Estado: En Proceso" />
          </div>
        </section>
        <section>
          <div className="flex-wrap flex justify-center">
            <Description title="Portafolio" text="Este es mi portafolio de desarrollo, donde pondré aquellos proyectos en los que fui participante. También son la garantía de mi conocimiento." />
          </div>
          <div className="w-full flex overflow-x-auto">
            <Portafolio titulo="Fabrica Escuela UdeA" texto="Fábrica escuela orientado al módulo de Ingresos y Reingresos universitarios" imagen="images/utin.jpg" link="https://github.com/Bulku/Lab3IngresosyReingresos" descripcion="Logo Fábrica Escuela" />
            <Portafolio titulo="Ahorcado" texto="Juego realizado en clase de lógica 2" imagen="images/verdugo.png" link="https://github.com/LeoteoBulku/EvidenciaCursoJavaS-Ahorcado" descripcion="Juego Ahorcado" />
            <Portafolio titulo="BlackJack" texto="Juego BlackJack desarrollado en lógica 2" imagen="images/cartas.png" link="https://drive.google.com/drive/u/2/folders/1jtQm0QDCmyZczqq05UydkZz5SHF0Lp8i" descripcion="Logo de la app" />
            <Portafolio titulo="Hoja de Vida React" texto="Hoja de vida en React para la web" imagen="images/curriculum.png" link="https://github.com/Bulku/LeonVelezCV" descripcion="Logo de la actividad" />
          </div>
        </section>
        <footer className="mb-0 text-center w-full min-w-max m-2 p-10  bg-black text-white">
          2023 All Rights Reserved. Leon Mateo Velez Gonzalez
        </footer>
      </main>
      <aside className="bg-[#000000] w-20 fixed right-0 h-screen text-white">
        <section className="mt-16">
          <section className="flex flex-col items-center">
            <span className="font-bold text-center">Redes Sociales</span>
            <div>
              <Social name="Instagram" link="https://www.instagram.com/leoteo_bulku/" />
              <Social name="Github" link="https://github.com/Bulku" />
              <Social name="Youtube" link="https://www.youtube.com/@soybulku3761" />
              <Social name="Linkedin" link="https://acortar.link/snBYyD" />
            </div>
          </section>
        </section>
      </aside>
    </div>
  );
}

export default Index;
