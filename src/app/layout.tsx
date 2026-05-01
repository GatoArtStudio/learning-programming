import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aprendiendo programación",
  description: "Aprendiendo programacion de forma dinamica haciendo uso de elementos dinamicos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
