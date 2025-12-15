const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-3xl md:text-4xl leading-tight tracking-tight">
    {children}
  </h2>
);

const PrimaryButton = ({ children }: { children: React.ReactNode }) => (
  <a
    href="#demo"
    className="inline-flex items-center justify-center rounded-2xl bg-accent px-6 py-3 text-white font-medium
               shadow-sm transition hover:bg-accentDark focus:outline-none focus:ring-2 focus:ring-accent/40"
  >
    {children}
  </a>
);

const SubtleButton = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <a
    href={href}
    className="inline-flex items-center justify-center rounded-2xl px-6 py-3 text-accent
               border border-accent/25 bg-transparent hover:bg-accentSoft transition"
  >
    {children}
  </a>
);

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* NAV */}
      <header className="mx-auto max-w-6xl px-6 py-6">
        <nav className="flex items-center justify-between">
          <div className="text-xl tracking-tight">
            <span className="font-semibold">My</span>Clarix
          </div>

          <div className="hidden md:flex items-center gap-5">
            <a href="#producto" className="text-sm text-muted hover:text-charcoal transition">
              Producto
            </a>
            <a href="#diferencias" className="text-sm text-muted hover:text-charcoal transition">
              Diferencias
            </a>
            <a href="#demo" className="text-sm text-muted hover:text-charcoal transition">
              Demo
            </a>

            <a
              href="#demo"
              className="rounded-2xl border border-charcoal/15 bg-white/40 px-4 py-2 text-sm
                         hover:bg-white/70 transition"
            >
              Solicitar demo
            </a>
          </div>

          <a
            href="#demo"
            className="md:hidden rounded-2xl border border-charcoal/15 bg-white/40 px-4 py-2 text-sm
                       hover:bg-white/70 transition"
          >
            Demo
          </a>
        </nav>
      </header>

      {/* HERO */}
      <section className="mx-auto max-w-6xl px-6 pb-14 pt-6">
        <div className="rounded-[28px] bg-white/55 border border-charcoal/10 p-8 md:p-14 shadow-sm">
          <p className="text-sm uppercase tracking-[0.18em] text-muted">
            Asistente premium para negocios con clientes reales
          </p>

          <h1 className="mt-4 text-4xl md:text-6xl leading-tight tracking-tight">
            El asistente inteligente que convierte{" "}
            <span className="text-accent">conversaciones</span> en citas reales
          </h1>

          <p className="mt-5 max-w-2xl text-base md:text-lg text-muted leading-relaxed">
            Atiende, entiende y organiza citas con un trato natural y profesional.
            Ventas suaves solo cuando hay interés real. Sin presión. Sin ruido.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <PrimaryButton>Solicitar demo personalizada</PrimaryButton>
            <SubtleButton href="#producto">Ver cómo funciona</SubtleButton>
          </div>
        </div>
      </section>

      {/* PROBLEMA */}
      <section id="producto" className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <SectionTitle>
              Tus clientes escriben. El problema es lo que pasa después.
            </SectionTitle>
            <p className="mt-4 text-muted leading-relaxed">
              Mensajes fuera de horario, conversaciones que no se cierran y citas mal
              coordinadas. MyClarix pone orden sin romper la cercanía.
            </p>
          </div>

          <div className="rounded-[24px] bg-pearl/40 border border-charcoal/10 p-7 shadow-sm">
            <ul className="space-y-3 text-charcoal">
              {[
                "Mensajes sin responder a tiempo",
                "Oportunidades que se enfrían",
                "Citas confusas o mal gestionadas",
                "Demasiado tiempo en respuestas repetitivas",
              ].map((t) => (
                <li key={t} className="flex gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-accent" />
                  <span className="leading-relaxed">{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* QUÉ HACE */}
      <section className="mx-auto max-w-6xl px-6 py-14">
        <SectionTitle>Qué hace MyClarix por tu negocio</SectionTitle>

        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {[
            ["Conversación natural", "Responde y guía sin sonar robótico."],
            ["Citas inteligentes", "Detecta fecha/hora, pide motivo y confirma sin errores."],
            ["Ventas suaves", "Actúa solo cuando hay intención real (curso, asesoría, consultoría)."],
            ["Imagen premium", "Tu marca se comunica con claridad, incluso cuando no estás."],
            ["Control total", "Reglas claras: sin cambios peligrosos, sin letra pequeña."],
            ["Orden y foco", "Más tiempo para ti, más oportunidades reales."],
          ].map(([title, desc]) => (
            <div
              key={title}
              className="rounded-[24px] bg-white/55 border border-charcoal/10 p-7 shadow-sm
                         hover:shadow-md transition"
            >
              <h3 className="text-xl tracking-tight">{title}</h3>
              <p className="mt-3 text-muted leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PARA QUIÉN */}
      <section className="mx-auto max-w-6xl px-6 py-14">
        <div className="rounded-[28px] bg-pearl/40 border border-charcoal/10 p-8 md:p-12 shadow-sm">
          <SectionTitle>
            Diseñado para negocios que cuidan su trato con el cliente
          </SectionTitle>

          <p className="mt-4 text-muted leading-relaxed max-w-3xl">
            Ideal para academias, consultores, profesionales independientes y negocios que trabajan con citas.
            Si hablas con clientes, MyClarix trabaja contigo.
          </p>

          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {["Academias", "Consultores", "Profesionales", "Negocios con citas"].map((x) => (
              <div
                key={x}
                className="rounded-2xl bg-white/60 border border-charcoal/10 px-4 py-3 text-sm shadow-sm"
              >
                {x}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DIFERENCIADORES */}
      <section id="diferencias" className="mx-auto max-w-6xl px-6 py-14">
        <SectionTitle>No es otro asistente más</SectionTitle>

        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {[
            ["Ventas suaves", "Solo aparece cuando hay interés real. Sin presionar."],
            ["Control total", "Tú defines qué puede y qué no puede hacer el sistema."],
            ["Citas sin confusión", "Flujo natural: fecha/hora → motivo → confirmación."],
          ].map(([title, desc]) => (
            <div
              key={title}
              className="rounded-[24px] bg-white/55 border border-charcoal/10 p-7 shadow-sm
                         hover:shadow-md transition"
            >
              <h3 className="text-xl tracking-tight">{title}</h3>
              <p className="mt-3 text-muted leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA FINAL */}
      <section id="demo" className="mx-auto max-w-6xl px-6 py-16">
        <div className="rounded-[28px] bg-accent text-white p-8 md:p-12 shadow-sm">
          <h2 className="text-3xl md:text-4xl leading-tight tracking-tight">
            ¿Quieres ver MyClarix funcionando en tu negocio?
          </h2>

          <p className="mt-4 text-white/90 leading-relaxed max-w-2xl">
            Solicita una demo personalizada y descubre cómo mejorar tu atención, tus citas y tu proceso comercial
            sin cambiar tu forma de trabajar.
          </p>

          <div className="mt-7 flex flex-col sm:flex-row gap-3">
            <a
              className="inline-flex items-center justify-center rounded-2xl bg-white px-6 py-3 text-accent font-medium
                         transition hover:opacity-90 shadow-sm"
              href="mailto:demo@myclarix.com?subject=Solicitud%20de%20demo%20MyClarix"
            >
              Solicitar demo por email
            </a>

            <a
              className="inline-flex items-center justify-center rounded-2xl border border-white/40 px-6 py-3 text-white
                         hover:bg-white/10 transition"
              href="#"
              title="Luego lo conectamos a WhatsApp"
            >
              Hablar por WhatsApp (próximamente)
            </a>
          </div>

          <p className="mt-4 text-xs text-white/80">
            *El botón de WhatsApp lo activamos cuando integremos el canal.
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="mx-auto max-w-6xl px-6 pb-10">
        <div className="border-t border-charcoal/10 pt-6 text-sm text-muted flex flex-col md:flex-row gap-2 md:items-center md:justify-between">
          <span>© {new Date().getFullYear()} MyClarix</span>
          <span>Premium AI Assistant · Citas · Ventas suaves · Control total</span>
        </div>
      </footer>
    </main>
  );
}
