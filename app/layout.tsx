import type { Metadata } from "next";
import "./styles/main.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import setFooterLinks from "./functions/setFooterLinks";
import NavBar from "./components/NavBar";

export const metadata: Metadata = {
  title: "Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image" href="/icons/capy.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Pixelify+Sans:wght@400..700&display=swap"
          rel="stylesheet"
        ></link>
      </head>
      <body>
        <Header title="Anna's site" />
        <main>
          <NavBar />
          {children}
        </main>
        <Footer links={setFooterLinks()} />
      </body>
    </html>
  );
}
