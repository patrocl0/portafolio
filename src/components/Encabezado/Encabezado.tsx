import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";

export const Encabezado = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.2 }}
      id="Home"
      className="min-h-dvh flex flex-col justify-center items-center px-5 sm:px-10 md:px-16 lg:px-24 bg-[radial-gradient(circle_at_center,theme(colors.sky.800/0.12),transparent_70%)]"
    >
      <h1 className="font-bold leading-[0.95] tracking-tighter mb-6 text-[clamp(3rem,12vw,7rem)] font-mono text-center">
        <span className="block text-gray-200">Brayan</span>
        <span className="block text-outline ">Mora</span>
      </h1>
      <div className="flex justify-center items-center gap-3 sm:gap-4 w-full max-w-xs sm:max-w-sm md:max-w-md">
        <span className="h-px flex-1 border border-gray-400"></span>
        <p className="text-gray-200 font-mono text-[clamp(0.6rem,2.5vw,0.875rem)] text-center whitespace-nowrap">
          FULL STACK WEB DEVELOPER
        </p>
        <span className="h-px flex-1 border border-gray-400"></span>
      </div>

      <p className="font-mono text-gray-500 mt-5 text-center text-sm sm:text-base max-w-sm sm:max-w-lg md:max-w-xl lg:max-w-2xl leading-relaxed px-2">
        Ingeniero informático & desarrollador web con <b>3+ años</b> de
        experiencia creando interfaces eficientes y escalables, especializado en
        React, Node.js, TypeScript & TailwindCSS.
      </p>

      <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-5 mt-10 w-full max-w-xs sm:max-w-none">
        <a href="https://github.com/patrocl0">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="btn-link bg-gray-300 text-black w-full sm:w-auto"
          >
            <FontAwesomeIcon icon={faGithub} className="me-3" />
            Github
          </motion.button>
        </a>
        <a href="http://www.linkedin.com/in/patrocl0">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="btn-link border border-gray-400 text-gray-400 w-full sm:w-auto"
          >
            <FontAwesomeIcon icon={faLinkedin} className="text-gray-400 me-3" />
            Linkedin
          </motion.button>
        </a>
        <a href="/cv.pdf" download="Brayan_Mora_CV.pdf">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="btn-link bg-sky-600 w-full sm:w-auto"
          >
            <FontAwesomeIcon icon={faDownload} className="me-3" />
            Descargar CV
          </motion.button>
        </a>
      </div>
    </motion.section>
  );
};
