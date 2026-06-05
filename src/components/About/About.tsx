import avatar from "../../assets/avatar.png";

export const About = () => {
  return (
    <section id="sobre-mi" className="px-5 sm:px-10 md:px-16 lg:px-24">
      {/* Encabezado */}
      <div className="flex justify-between items-center mb-10 sm:mb-16 gap-3">
        <span className="h-px flex-1 border border-gray-600"></span>
        <p className="text-lg sm:text-2xl shrink-0 text-gray-400 font-mono whitespace-nowrap">
          Sobre mí
        </p>
        <span className="h-px flex-1 border border-gray-600"></span>
      </div>

      <article className="flex flex-col sm:flex-row gap-8 sm:gap-12 items-center justify-center mb-12 text-start font-light">
        {/* Texto */}
        <div className="space-y-4 flex-1 font-mono">
          <h1 className="text-lg sm:text-xl">Hola, soy Stiven Mora 👋</h1>

          <p className="text-muted text-xs sm:text-sm leading-relaxed">
            Empecé en la programación desde bachillerato y desde entonces he
            estado aprendiendo y creciendo como desarrollador web.
          </p>

          <p className="text-xs sm:text-sm leading-relaxed text-gray-400">
            Soy <span className="text-blue-400">Desarrollador Full Stack </span>
            con +3 años de experiencia construyendo aplicaciones web modernas
            con React, Node.js. Mi enfoque está en el desarrollo de APIs REST,
            autenticación segura (OAuth/JWT) y gestión de bases de datos SQL
            (MySQL, PostgreSQL, SQL Server). Me apasiona optimizar rendimiento
            web y desarrollar soluciones escalables bajo metodologías ágiles
            SCRUM.
          </p>

          <p className="text-xs sm:text-sm leading-relaxed text-gray-400">
            📌 Actualmente me especializo en desarrollo full-stack con{" "}
            <span className="text-blue-400">React y Node.js/Express </span>y
            busco oportunidades como{" "}
            <span className="text-blue-400">
              Full Stack / Frontend Developer.
            </span>
          </p>
        </div>

        {/* Avatar — arriba en mobile (order-first), derecha en sm+ */}
        <figure
          className="order-first sm:order-last flex justify-center avatar-wrap rounded-2xl relative shrink-0
            before:content-['']
            before:absolute
            before:inset-[-2px]
            before:rounded-[16px]
            before:z-0
            before:bg-[linear-gradient(135deg,#3b82f6,#0000_60%)]"
        >
          <img
            src={avatar}
            alt="Foto de Stiven Mora"
            className="relative z-10 size-48 sm:size-56 md:size-64 rounded-2xl object-cover border border-[#2a2a2a]"
          />
        </figure>
      </article>
    </section>
  );
};
