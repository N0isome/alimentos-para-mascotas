import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Safari Pez — Buena comida. Mejores colitas.",
  description: "Concepto de distribuidora de alimentos para perros y gatos. Explora un catálogo interactivo y prepara una solicitud por volumen. Proyecto de Nicolás Cortez.",
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="antialiased">{children}</body>
    </html>
  );
}
