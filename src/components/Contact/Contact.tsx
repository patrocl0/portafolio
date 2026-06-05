import { faArrowRight, faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";

export const Contact = () => {
  return (
    <section id="contact" className="px-5 sm:px-10 md:px-16 lg:px-24 ">
      <div className="mt-6 text-center">
        {/* Ubicación */}
        <p className="font-mono text-[10px] sm:text-[12px] mb-4 sm:mb-5 tracking-widest text-gray-500 text-center ">
          BASADO EN MEDELLIN, COLOMBIA — DISPONIBLE REMOTAMENTE
        </p>

        {/* Nombre */}
        <h3 className="font-mono text-[clamp(2.5rem,10vw,6rem)] font-medium tracking-widest mb-6 sm:mb-8 text-center leading-none">
          Patrocl<span className="text-sky-600">0</span>
        </h3>

        {/* Email */}
        <a
          href="mailto:brayanestiven1208@gmail.com"
          className="font-mono text-xs sm:text-sm text-gray-400 hover:text-sky-500 transition-colors duration-200 block text-center "
        >
          {" "}
          brayanestiven1208@gmail.com
        </a>

        {/* Card de disponibilidad */}
        <div className="flex flex-col sm:flex-row justify-between bg-[#111] border border-white/6 rounded-2xl mt-8 sm:mt-10 p-5 sm:p-6 items-center gap-5 sm:gap-0 relative">
          {/* Disponibilidad */}
          <div className="flex items-center gap-4 w-full sm:w-auto">
            {/* Dot animado */}
            <div className="relative flex items-center justify-center h-4 w-4 shrink-0">
              <span className="absolute inline-flex h-3 w-3 rounded-full bg-blue-500 opacity-75 animate-ping"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-500"></span>
            </div>
            <div>
              <p className="text-gray-200 text-sm sm:text-base">
                Disponible para proyectos
              </p>
              <p className="text-gray-500 text-[10px] sm:text-[12px]">
                Freelance · Tiempo completo · Remoto
              </p>
            </div>
          </div>

          {/* Divider — solo visible en sm+ */}
          <div className="hidden sm:block w-px h-10 bg-gray-700 shrink-0"></div>

          {/* Botones */}
          <div className="flex flex-col xs:flex-row sm:flex-row justify-center gap-3 w-full sm:w-auto">
            <a
              href="https://wa.me/573019044757?text=Hola%20Brayan,%20vi%20tu%20portafolio%20y%20me%20gustaría%20hablar%20contigo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-link bg-sky-600 w-full sm:w-auto justify-center"
              >
                Hablemos
                <FontAwesomeIcon icon={faArrowRight} className="ms-4" />
              </motion.button>
            </a>
            <a href="/cv.pdf" download="Brayan_Mora_CV.pdf">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-link border border-gray-400 text-gray-400 w-full sm:w-auto justify-center"
              >
                Descargar CV
                <FontAwesomeIcon icon={faDownload} className="ms-4" />
              </motion.button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
