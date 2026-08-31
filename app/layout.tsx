import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Alimentos para Mascotas | Distribuidora especializada",
  description: "Nutrición, marcas y distribución para petshops, veterinarias y comercios.",
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
