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
  href = "#demo",
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


const OnDarkButton = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <a
    href={href}
    className="
      inline-flex items-center justify-center
      rounded-2xl px-6 py-3 font-semibold
      bg-white text-accent
      shadow-sm transition
      hover:bg-white/90
      focus:outline-none focus:ring-2 focus:ring-white/40
    "
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

            <SecondaryButton href="#demo">
              Solicitar demo
            </SecondaryButton>
          </div>

          <SecondaryButton href="#demo" className="md:hidden">
            Demo
          </SecondaryButton>
        </nav>
      </header>

      {/* HERO */}
      <section className="mx-auto max-w-6xl px-6 pb-14 pt-6">
        <div className="relative overflow-hidden rounded-[28px] bg-white/60 border border-charcoal/10 p-8 md:p-14 shadow-sm">
          {/* glow decorativo */}
          <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-accent/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-28 -left-28 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />

          <p className="inline-flex w-fit items-center rounded-full border border-charcoal/10 bg-white/70 px-3 py-1 text-xs uppercase tracking-[0.18em] text-charcoal">
            Asistente premium para negocios con clientes reales
          </p>

          <h1 className="mt-4 text-4xl md:text-6xl font-semibold leading-tight tracking-tight text-charcoal">
            El asistente inteligente que convierte{" "}
            <span className="text-accent">conversaciones</span> en citas reales
          </h1>

          <p className="mt-5 max-w-2xl text-base md:text-lg text-muted leading-relaxed">
            Atiende, entiende y organiza citas con un trato natural y profesional.
            Ventas suaves solo cuando hay interés real. Sin presión. Sin ruido.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <PrimaryButton>Solicitar demo personalizada</PrimaryButton>
            <SecondaryButton href="#producto">Ver cómo funciona</SecondaryButton>
          </div>

          {/* micro-métricas */}
          <div className="mt-8 flex flex-wrap items-center gap-3 text-sm">
            {[
              ["24/7", "Atención continua"],
              ["Citas", "Flujo sin errores"],
              ["Control", "Reglas claras"],
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
      </section>

      {/* CTA FINAL */}
      <section id="demo" className="mx-auto max-w-6xl px-6 py-16">
        <div className="relative overflow-hidden rounded-[28px] bg-accent text-white p-8 md:p-12 shadow-sm">
          <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-white/25 blur-3xl" />

          <h2 className="text-3xl md:text-4xl font-semibold leading-tight tracking-tight">
            ¿Quieres ver MyClarix funcionando en tu negocio?
          </h2>

          <p className="mt-4 text-white/95 leading-relaxed max-w-2xl">
            Solicita una demo personalizada y descubre cómo mejorar tu atención,
            tus citas y tu proceso comercial sin cambiar tu forma de trabajar.
          </p>

          <div className="mt-7 flex flex-col sm:flex-row gap-3">
            <OnDarkButton href="mailto:demo@myclarix.com">
              Solicitar demo por email
            </OnDarkButton>

            <a
              className="
                inline-flex items-center justify-center
                rounded-2xl px-6 py-3 font-semibold
                border border-white/70 text-white
                hover:bg-white/15 transition
                focus:outline-none focus:ring-2 focus:ring-white/40
              "
              href="#"
            >
              WhatsApp (próximamente)
            </a>
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
