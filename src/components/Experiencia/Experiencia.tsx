export const Experiencia = () => {
  const experiences = [
    {
      title: "FullStack Web Developer",
      company: "I4Digital",
      mode: "Remoto",
      period: "Oct 2022 – May 2024",
      bullets: [
        "Desarrollé interfaces modernas mediante React.js y TailwindCSS, creando componentes reutilizables para múltiples proyectos",
        "Optimicé el rendimiento de landing pages reduciendo tiempos de carga en aproximadamente 50%.",
        "Implementé diseño responsivo y mejoras de UI enfocadas en experiencia de usuario y accesibilidad.",
        "Colaboré con equipos multidisciplinarios bajo metodología SCRUM, utilizando Git para control de versiones.",
      ],
      stack: ["React", "Tailwind", "NodeJs", "Express", "MongoDB"],
    },
    {
      title: "FullStack Web Developer",
      company: "Garantias Comunitarias",
      mode: "Presencial",
      period: "Abr 2021 – Sep 2022",
      bullets: [
        "Desarrollé aplicaciones web completas utilizando Angular en frontend y Laravel (MVC) en backend.",
        "Diseñé e implementé APIs RESTful para la integración entre frontend y backend.",
        "Implementé autenticación y control de acceso mediante OAuth, garantizando seguridad y protección de datos.",
        "Administré bases de datos relacionales (MySQL/PostgreSQL), creando migraciones, seeders y consultas optimizadas con Eloquent ORM.",
        "Realicé mantenimiento evolutivo y correctivo de funcionalidades existentes, asegurando estabilidad del sistema.",
      ],
      stack: [
        "Javascript",
        "Angular",
        "Tailwind",
        "NodeJs",
        "Express",
        "MongoDB",
      ],
    },
    {
      title: "Desarrollador web",
      company: "Intergrupo",
      mode: "Presencial",
      period: "Jun 2018 – Ago 2019",
      bullets: [
        "Desarrollé módulos backend con C# (.NET) implementando operaciones CRUD para gestión de usuarios y datos del sistema.",
        "Implementé funcionalidades de login, validación de credenciales y control de acceso para seguridad de aplicaciones internas.",
        "Gestioné bases de datos en SQL Server, optimizando consultas y procedimientos almacenados.",
        "Creé reportes y dashboards en Power BI, integrando datos desde sistemas internos para visualización de indicadores y toma de decisiones.",
      ],
      stack: ["Javascript", "c# .NET", "Bootstrap", "Power BI", "MYSQL"],
    },
  ];

  return (
    <section id="experiencia" className="px-5 sm:px-10 md:px-16 lg:px-24">
      {/* Encabezado de sección */}
      <div className="flex justify-between items-center mb-10 sm:mb-16 gap-3">
        <span className="h-px flex-1 border border-gray-600"></span>
        <p className="text-lg sm:text-2xl shrink-0 text-gray-400 font-mono whitespace-nowrap">
          Experiencia laboral
        </p>
        <span className="h-px flex-1 border border-gray-600"></span>
      </div>

      {/* Artículos */}
      {experiences.map((exp, i) => (
        <article
          key={i}
          className="  sm:pl-6 pb-10 sm:pb-12 border-[#2a2a2a] relative font-mono text-start"
        >
          {/* Dot animado */}
          <div className="flex items-center justify-center h-4.5 w-4.5 absolute left-0 top-1.5 ">
            <span className="absolute inline-flex h-3 w-3 rounded-full bg-blue-500 opacity-75 animate-ping"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-500"></span>
          </div>

          {/* Header del artículo */}
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 sm:gap-0 ms-8">
            <div>
              <h2 className="text-base sm:text-[20px]">{exp.title}</h2>
              <p className="text-[11px] sm:text-[12px] text-gray-500 mt-0.5">
                <span className="text-blue-500">{exp.company}</span> —{" "}
                {exp.mode}
              </p>
            </div>
            {/* Fecha: abajo del título en mobile, a la derecha en sm+ */}
            <p className="text-[11px] sm:text-[12px] text-gray-500 sm:shrink-0 sm:ml-4">
              {exp.period}
            </p>
          </div>

          {/* Bullets */}
          <ul className="mt-4 sm:mt-6 marker:text-blue-400 tracking-wide text-xs sm:text-sm list-disc pl-4 text-gray-400">
            {exp.bullets.map((b, j) => (
              <li key={j} className="mb-2">
                {b}
              </li>
            ))}
          </ul>

          {/* Stack */}
          <div className="flex flex-wrap mt-4 sm:mt-6 gap-2 sm:gap-5">
            {exp.stack.map((tech) => (
              <span
                key={tech}
                className="text-[10px] sm:text-xs rounded border border-[#2a2a2a] whitespace-nowrap px-2 sm:px-2.5 py-1 text-muted hover:border-blue-500 hover:text-blue-500 cursor-default transition-colors duration-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </article>
      ))}
    </section>
  );
};
