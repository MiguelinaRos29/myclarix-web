import "./globals.css";
import { DM_Serif_Display, Inter } from "next/font/google";

const serif = DM_Serif_Display({ subsets: ["latin"], weight: "400", variable: "--font-serif" });
const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata = {
  title: "MyClarix — Conversaciones que se convierten en citas",
  description:
    "Asistente inteligente premium que organiza citas, atiende clientes y acompaña ventas suaves sin presión.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={`${serif.variable} ${inter.variable} bg-ivory text-charcoal`}>
        {children}
      </body>
    </html>
  );
}

