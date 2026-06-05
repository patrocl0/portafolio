export const Footer = () => {
  return (
    <footer className="mt-5 pt-8 pb-8 border-t border-[#1f1f1f] text-gray-500 font-mono">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0 text-[10px] sm:text-[12px]">
        <p>© 2026 · Powered by Tailwind & React</p>

        <div className="flex gap-4 sm:gap-5">
          <a
            href="https://github.com/patrocl0"
            className="hover:text-sky-500 transition-colors duration-200"
          >
            Github
          </a>
          <a
            href="http://www.linkedin.com/in/patrocl0"
            className="hover:text-sky-500 transition-colors duration-200"
          >
            Linkedin
          </a>
          <a
            href="#Home"
            className="hover:text-sky-500 transition-colors duration-200"
          >
            Volver arriba ↑
          </a>
        </div>
      </div>
    </footer>
  );
};
