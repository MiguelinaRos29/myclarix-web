import React from "react";

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-3xl md:text-4xl leading-tight tracking-tight text-charcoal">
    {children}
  </h2>
);

// ===============================
// BOTONES – REGLA ÚNICA MYCLARIX
// ===============================

const PrimaryButton = ({
  href = "#contacto",
  children,
}: {
  href?: string;
  children: React.ReactNode;
}) => (
  <a
    href={href}
    className="
      inline-flex items-center justify-center
      rounded-2xl px-6 py-3 font-semibold
      bg-accent text-white
      shadow-sm transition
      hover:bg-accentDark
      focus:outline-none focus:ring-2 focus:ring-accent/40
    "
  >
    {children}
  </a>
);

const SecondaryButton = ({
  href,
  children,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) => (
  <a
    href={href}
    className={`
      inline-flex items-center justify-center
      rounded-2xl px-6 py-3 font-semibold
      border border-accent/30 text-accent
      bg-transparent transition
      hover:bg-accent hover:text-white
      focus:outline-none focus:ring-2 focus:ring-accent/40
      ${className}
    `}
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
            <a href="#contacto" className="text-sm text-muted hover:text-charcoal transition">
              Contacto
            </a>

            <SecondaryButton href="#contacto">
              Solicitar acceso
            </SecondaryButton>
          </div>

          <SecondaryButton href="#contacto" className="md:hidden">
            Acceso
          </SecondaryButton>
        </nav>
      </header>

      {/* HERO */}
      <section className="mx-auto max-w-6xl px-6 pb-14 pt-6">
        <div className="relative overflow-hidden rounded-[28px] bg-white/60 border border-charcoal/10 p-8 md:p-14 shadow-sm">
          {/* glow decorativo */}
          <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-accent/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-28 -left-28 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />

          {/* contenido por encima */}
          <div className="relative z-10">
            <p className="inline-flex w-fit items-center rounded-full border border-charcoal/10 bg-white/70 px-3 py-1 text-xs uppercase tracking-[0.18em] text-charcoal">
              Asistente premium para negocios con clientes reales
            </p>

            <h1 className="mt-4 text-4xl md:text-6xl font-semibold leading-tight tracking-tight text-charcoal">
              El asistente inteligente que convierte{" "}
              <span className="text-accent">conversaciones</span> en citas reales
            </h1>

            <p className="mt-5 max-w-2xl text-base md:text-lg text-muted leading-relaxed">
              No es “un chatbot más”. MyClarix entiende intención, guía al cliente con naturalidad y
              deja todo preparado para que tú solo cierres lo importante.
            </p>

            <p className="mt-3 max-w-2xl text-base md:text-lg text-muted leading-relaxed">
              Si hoy pierdes oportunidades por mensajes sin responder, citas confusas o falta de seguimiento,
              aquí hay una forma elegante de recuperar el control.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <PrimaryButton href="#contacto">Solicitar acceso</PrimaryButton>
              <SecondaryButton href="#producto">Ver cómo funciona</SecondaryButton>
            </div>

            {/* micro-métricas */}
            <div className="mt-8 flex flex-wrap items-center gap-3 text-sm">
              {[
                ["24/7", "Respuestas consistentes"],
                ["Citas", "Fecha → motivo → confirmación"],
                ["Ventas", "Solo cuando hay interés real"],
              ].map(([a, b]) => (
                <div
                  key={a}
                  className="rounded-2xl border border-charcoal/10 bg-white/60 px-4 py-2"
                >
                  <span className="font-semibold text-charcoal">{a}</span>{" "}
                  <span className="text-muted">{b}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTO */}
      <section id="producto" className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <SectionTitle>Qué hace MyClarix, en la práctica</SectionTitle>
            <p className="mt-4 text-muted leading-relaxed">
              MyClarix no solo responde. Detecta intención (información, cita, compra), organiza el flujo y
              convierte el interés en acción sin que tu negocio pierda el tono humano.
            </p>

            <div className="mt-6 space-y-3">
              {[
                ["Respuestas con intención", "No dispara textos: entiende lo que el cliente quiere y lo guía."],
                ["Citas sin confusión", "Fecha/hora → pide motivo → confirma. Ordenado, sin errores."],
                ["Seguimiento elegante", "Retoma conversaciones y empuja el cierre sin parecer agresivo."],
              ].map(([t, d]) => (
                <div
                  key={t}
                  className="rounded-2xl bg-white/60 border border-charcoal/10 p-5 shadow-sm"
                >
                  <div className="text-lg font-semibold text-charcoal">{t}</div>
                  <div className="mt-1 text-muted leading-relaxed">{d}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[28px] bg-pearl/40 border border-charcoal/10 p-8 shadow-sm">
            <div className="text-sm uppercase tracking-[0.18em] text-muted">
              Lo que notarás desde el primer día
            </div>

            <ul className="mt-5 space-y-3 text-charcoal">
              {[
                "Menos mensajes perdidos y más respuestas a tiempo",
                "Más citas confirmadas y menos idas y vueltas",
                "Más claridad en el proceso comercial",
                "Más tiempo para ti y tu equipo",
              ].map((t) => (
                <li key={t} className="flex gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-accent" />
                  <span className="leading-relaxed">{t}</span>
                </li>
              ))}
            </ul>

            <div className="mt-7">
              <SecondaryButton href="#contacto" className="w-full">
                Quiero saber si encaja conmigo
              </SecondaryButton>
            </div>
          </div>
        </div>
      </section>

      {/* DIFERENCIAS */}
      <section id="diferencias" className="mx-auto max-w-6xl px-6 py-14">
        <SectionTitle>Por qué MyClarix se siente premium</SectionTitle>

        <p className="mt-4 text-muted leading-relaxed max-w-3xl">
          No es solo “IA”. Es un sistema con reglas claras, flujo de citas consistente y un estilo de comunicación
          que protege la imagen de tu marca.
        </p>

        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {[
            ["Control total", "Sin sorpresas: define qué puede y qué no puede hacer."],
            ["Ventas suaves", "Activa el modo comercial solo cuando hay intención real."],
            ["Tono humano", "Respuestas naturales, firmes y claras. Sin parecer robot."],
          ].map(([title, desc]) => (
            <div
              key={title}
              className="rounded-[24px] bg-white/55 border border-charcoal/10 p-7 shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-xl tracking-tight text-charcoal">{title}</h3>
              <p className="mt-3 text-muted leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACTO / CTA FINAL */}
      <section id="contacto" className="mx-auto max-w-6xl px-6 py-16">
        <div className="relative overflow-hidden rounded-[28px] bg-accent text-white p-8 md:p-12 shadow-sm">
          <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-white/25 blur-3xl" />

          {/* contenido por encima */}
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-semibold leading-tight tracking-tight">
              ¿Te enseño cómo encaja en tu negocio?
            </h2>

            <p className="mt-4 text-white/95 leading-relaxed max-w-2xl">
              Cuéntame qué haces (academia, consultoría, negocio con citas) y te muestro un ejemplo real de flujo:
              cómo responde, cómo organiza y cómo cierra.
            </p>

            <div className="mt-7 flex flex-col sm:flex-row gap-3">
              <a
                href="mailto:demo@myclarix.com?subject=Contacto%20MyClarix"
                className="
                  inline-flex items-center justify-center
                  rounded-2xl px-6 py-3 font-semibold
                  bg-charcoal text-white
                  hover:bg-charcoal/90 transition
                  focus:outline-none focus:ring-2 focus:ring-white/40
                "
              >
                Hablar con nosotros
              </a>

              <a
                className="
                  inline-flex items-center justify-center
                  rounded-2xl px-6 py-3 font-semibold
                  border border-white/70 text-white
                  hover:bg-white/15 transition
                  focus:outline-none focus:ring-2 focus:ring-white/40
                "
                href="#"
                title="Canal en preparación"
              >
                WhatsApp (próximamente)
              </a>
            </div>
          </div>
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

