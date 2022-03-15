import { Card } from "../components/Card";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

import "../styles/home.scss";

import bannerImg from "../assets/images/banner-home-img.png";

export function Home() {
  return (
    <div>
      <Header />
      <div id="banner-home">
        <div>
          <div className="support-title">
            <h1>Suporte e AJuda</h1>
            <p>Como podemos te servir?</p>
          </div>
          <img
            src={bannerImg}
            alt="2 atendentes de uma cafeteria(estilo cartoon)"
          />
        </div>
      </div>

      <div id="container">
        <div id="home-content">
          <div className="title">
            <h2>Iniciando com Zap Delivery</h2>
          </div>
          <div className="cards">
            <Card iconClass="fa fa-user-plus" text="Como criar minha Conta" />
            <Card iconClass="fa fa-magic" text="Como criar meu App" />
            <Card iconClass="fa fa-bullhorn" text="Como divulgar minha loja" />
          </div>

          <div id="rule-dark"></div>

          <div className="title">
            <h2>Configurando o Meu Negócio</h2>
          </div>
          <div className="cards">
            <Card iconClass="fa fa-store" text="Editar minhas informações" />
            <Card iconClass="fa fa-brush" text="Temas e Cores" />
            <Card iconClass="fa fa-qrcode" text="Métodos de Operação" />
            <Card
              iconClass="fa fa-map-marker-alt"
              text="Cadastrar Meu Enderenço"
            />
            <Card iconClass="fa fa-comment" text="Contatos e Mídias Sociais" />
            <Card
              iconClass="fa fa-clock-four"
              text="Horários de Funcionamento"
            />
            <Card iconClass="fa fa-money-bill" text="Taxas de Entrega" />
            <Card
              iconClass="fa fa-hand-holding-dollar"
              text="Formas de Pagamento"
            />
            <Card iconClass="fa fa-credit-card-alt" text="Pagamento Online" />
            <Card iconClass="fa fa-receipt" text="Impressão de Comandas" />
            <Card iconClass="fa fa-phone" text="Integração com WhatsApp" />
            <Card iconClass="fa fa-cogs" text="Preferências" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
