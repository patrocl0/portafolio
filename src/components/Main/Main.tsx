import { About } from "../About/About";
import { Contact } from "../Contact/Contact";
import { Encabezado } from "../Encabezado/Encabezado";
import { Experiencia } from "../Experiencia/Experiencia";
import { Proyectos } from "../Proyectos/Proyectos";
import { Tecnologias } from "../Tecnologias/Tecnologias";

export const Main = () => {
  return (
    <main>
      <Encabezado />
      <Experiencia />
      <Proyectos />
      <About />
      <Tecnologias />
      <Contact />
    </main>
  );
};
