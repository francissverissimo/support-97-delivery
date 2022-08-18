import { Banner } from "../../components/Banner";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Component404 } from "../../components/Component404";

export function NotFound() {
  return (
    <div>
      <Header />
      <Banner />
      <Component404 text="Página não encontrada" />
      <Footer />
    </div>
  );
}
