import newExplorer from "../../assets/newexplorer.png";
import newExplorerBackend from "../../assets/backend.png";
import around from "../../assets/around_home.png";

const projects = [
  {
    img: newExplorer,
    imgPosition: "left",
    featured: "FEATURED . 01",
    title: "New Explorer",
    url: "https://github.com/patrocl0/project_new_explorer_frontend.git",
    description:
      "Este proyecto es una aplicación Full Stack donde los usuarios pueden buscar noticias, registrarse/iniciar sesión y guardar artículos favoritos.",
    stack: ["Javascript", "Tailwind", "NodeJs", "Express", "MongoDB"],
  },
  {
    img: newExplorerBackend,
    imgPosition: "right",
    featured: "FEATURED . 02",
    title: "New Explorer Backend",
    url: "https://github.com/patrocl0/project_new_explorer_backend.git",
    description:
      "Este proyecto es una aplicación Full Stack donde los usuarios pueden buscar noticias, registrarse/iniciar sesión y guardar artículos favoritos.",
    stack: ["NodeJS", "Express", "MongoDB", "JWT"],
  },
  {
    img: around,
    imgPosition: "left",
    featured: "FEATURED . 03",
    title: "Around US",
    url: "https://github.com/patrocl0/web_project_api_full.git",
    description:
      "Around The U.S. es una aplicación Fullstack que integra un frontend en React y un backend en Node.js/Express con MongoDB. El proyecto implementa un sistema completo de registro, inicio de sesión y autenticación mediante JWT, permitiendo a los usuarios acceder a contenido seguro e interactuar con tarjetas (cards) dentro de la plataforma.",
    stack: ["Javascript", "React", "Express", "MongoDB", "JWT", "NodeJS"],
  },
];

export const Proyectos = () => {
  return (
    <section id="proyectos" className="px-5 sm:px-10 md:px-16 lg:px-24">
      {/* Encabezado */}
      <div className="flex justify-between items-center mb-10 sm:mb-16 gap-3">
        <span className="h-px flex-1 border border-gray-600"></span>
        <p className="text-lg sm:text-2xl shrink-0 text-gray-400 font-mono whitespace-nowrap">
          Proyectos
        </p>
        <span className="h-px flex-1 border border-gray-600"></span>
      </div>

      <p className="font-mono text-xs sm:text-sm text-gray-400 text-center sm:text-left">
        Una colección de proyectos que muestran mis habilidades en el desarrollo
        full-stack, desde el concepto hasta la implementación.
      </p>

      {projects.map((project, i) => (
        <article
          key={i}
          className="mt-8 sm:mt-10 group grid grid-cols-1 md:grid-cols-2 rounded-xl overflow-hidden border border-white/6 hover:border-blue-500/20 transition-colors duration-300"
        >
          {/* Imagen — siempre arriba en mobile, izquierda o derecha en md+ */}
          <img
            src={project.img}
            alt={project.title}
            className={`w-full h-48 sm:h-64 md:h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.04] ${
              project.imgPosition === "right" ? "md:order-last" : ""
            }`}
          />

          {/* Contenido */}
          <div className="flex flex-col p-5 sm:p-8 md:p-10 font-mono">
            <div className="flex justify-between items-center">
              <p className="text-[10px] text-blue-500">{project.featured}</p>
              <span className="text-gray-500 text-xs">↗</span>
            </div>

            <h2 className="text-start text-lg sm:text-2xl text-blue-500 mt-2">
              {project.title}
            </h2>

            <p className="text-[11px] sm:text-[12px] text-gray-400 mt-4 sm:mt-6 leading-relaxed">
              {project.description}
            </p>

            <div className="flex flex-wrap mt-4 sm:mt-6 gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="text-[10px] sm:text-xs rounded border border-[#2a2a2a] whitespace-nowrap px-2 sm:px-2.5 py-1 text-muted hover:border-blue-500 hover:text-blue-500 cursor-default transition-colors duration-200"
                >
                  {tech}
                </span>
              ))}
            </div>

            <a
              href={project.url}
              className="mt-6 sm:mt-8 self-start text-[10px] sm:text-xs rounded border border-[#2a2a2a] whitespace-nowrap px-2 sm:px-2.5 py-1 text-muted hover:border-blue-500 hover:text-blue-500 cursor-default transition-colors duration-200"
            >
              Github
            </a>
          </div>
        </article>
      ))}
    </section>
  );
};
