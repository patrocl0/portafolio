const categories = [
  {
    label: "Front",
    stack: [
      "Javascript",
      "React",
      "Next.js",
      "Tailwind",
      "Angular",
      "HTML5",
      "CSS",
    ],
  },
  {
    label: "Backend",
    stack: [
      "MYSQL",
      "Sequelize",
      "PHP",
      "Laravel",
      "NodeJs",
      "Express",
      "MongoDB",
      "PostgreSQL",
    ],
  },
  {
    label: "Tools",
    stack: [
      "Git",
      "GitHub",
      "Vercel",
      "Postman",
      "GitCopilot",
      "Claude Code",
      "NPM",
    ],
  },
];

export const Tecnologias = () => {
  return (
    <section className="px-5 sm:px-10 md:px-16 lg:px-24">
      {/* Encabezado */}
      <div className="flex items-center mb-10 sm:mb-16 gap-3">
        <span className="h-px flex-1 border border-gray-600"></span>
        <p className="text-sm sm:text-2xl shrink-0 text-gray-400 font-mono whitespace-nowrap">
          Tecnologías y Herramientas
        </p>
        <span className="h-px flex-1 border border-gray-600"></span>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8">
        {categories.map((cat) => (
          <div
            key={cat.label}
            className="group border border-white/6 hover:border-blue-500/20 bg-surface rounded-xl p-4 sm:p-5 transition-colors duration-300"
          >
            <h3 className="font-mono text-xs text-center tracking-widest text-lime uppercase mb-4">
              {cat.label}
            </h3>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {cat.stack.map((tech) => (
                <span
                  key={tech}
                  className="text-[10px] sm:text-xs rounded border border-[#2a2a2a] whitespace-nowrap px-2 sm:px-2.5 py-1 text-muted hover:border-blue-500 hover:text-blue-500 cursor-default transition-colors duration-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
