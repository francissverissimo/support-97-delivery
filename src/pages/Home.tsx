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
            <h1>Suporte e Ajuda</h1>
            <p>Como podemos te servir?</p>
          </div>
          <img
            src={bannerImg}
            alt="2 atendentes de uma cafeteria(estilo cartoon)"
          />
        </div>
      </div>

      <div id="container-home">
        <div id="home-content">
          <div className="title">
            <h2>Iniciando com Zap Delivery</h2>
          </div>
          <div className="cards">
            <Card
              iconClass={"fa fa-user-plus"}
              text="Como criar minha Conta"
              id={"como-criar-minha-conta"}
            />
            <Card
              iconClass={"fa fa-magic"}
              text="Como criar meu App"
              id={"como-criar-meu-app"}
            />
            <Card
              iconClass={"fa fa-bullhorn"}
              text="Como divulgar minha loja"
              id={"como-divulgar-minha-loja"}
            />
          </div>

          <div id="rule-dark"></div>

          <div className="title">
            <h2>Configurando o Meu Negócio</h2>
          </div>
          <div className="cards">
            <Card
              iconClass={"fa fa-store"}
              text={"Editar minhas informações"}
              id={"editar-minhas-informacoes"}
            />
            <Card
              iconClass={"fa fa-brush"}
              text={"Temas e Cores"}
              id={"temas-e-cores"}
            />
            <Card
              iconClass={"fa fa-qrcode"}
              text={"Métodos de Operação"}
              id={"metodos-de-operacao"}
            />
            <Card
              iconClass={"fa fa-map-marker-alt"}
              text={"Cadastrar Meu Enderenço"}
              id={"cadastrar-meu-enderenco"}
            />
            <Card
              iconClass={"fa fa-comment"}
              text={"Contatos e Mídias Sociais"}
              id={"contatos-e-midias-sociais"}
            />
            <Card
              iconClass={"fa fa-clock-four"}
              text={"Horários de Funcionamento"}
              id={"horarios-de-funcionamento"}
            />
            <Card
              iconClass={"fa fa-money-bill"}
              text={"Taxas de Entrega"}
              id={"taxas-de-entrega"}
            />
            <Card
              iconClass={"fa fa-hand-holding-dollar"}
              text={"Formas de Pagamento"}
              id={"formas-de-pagamento"}
            />
            <Card
              iconClass={"fa fa-credit-card-alt"}
              text={"Pagamento Online"}
              id={"pagamento-online"}
            />
            <Card
              iconClass={"fa fa-receipt"}
              text={"Impressão de Comandas"}
              id={"impressao-de-comandas"}
            />
            <Card
              iconClass={"fa fa-phone"}
              text={"Integração com WhatsApp"}
              id={"integracao-com-whatsapp"}
            />
            <Card
              iconClass={"fa fa-cogs"}
              text={"Preferências"}
              id={"preferencias"}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
