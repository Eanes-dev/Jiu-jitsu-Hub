import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jiu Jitsu Hub",
  description: "Uma plataforma dedicada ao jiu-jítsu, reunindo informações sobre o esporte, artigos e conteúdos de aprendizagem em um só lugar.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-br"
    >
      <body>{children}</body>
    </html>
  );
}
