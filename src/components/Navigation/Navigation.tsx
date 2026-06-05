export const Navigation = () => {
  const navLinks = [
    { label: "Experiencia", href: "#experiencia" },
    { label: "Proyectos", href: "#proyectos" },
    { label: "Sobre mí", href: "#sobre-mi" },
  ];
  return (
    <nav className="max-w-4xl mx-auto px-3 sm:px-6 h-12 sm:h-14 flex items-center justify-between gap-2">
      <a
        className="hidden sm:block font-mono text-xs sm:text-sm font-medium tracking-widest shrink-0"
        href="#Home"
      >
        Patrocl
        <span className="text-sky-600">0</span>
      </a>

      <ul className="flex items-center justify-around sm:justify-between w-full sm:w-auto gap-1 sm:gap-4">
        {navLinks.map((link) => (
          <li key={link.label}>
            <a
              className="font-mono text-[9px] sm:text-xs hover:text-sky-500 transition-colors duration-200 whitespace-nowrap px-1 sm:px-0"
              href={link.href}
            >
              {link.label}
            </a>
          </li>
        ))}
        <li>
          <a
            className="btn-contact font-mono text-[9px] sm:text-xs px-2 sm:px-3 py-1"
            href="#contact"
          >
            Contacto
          </a>
        </li>
      </ul>
    </nav>
  );
};
