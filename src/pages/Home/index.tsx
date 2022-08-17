import { Header } from "../../components/Header";
import { Banner } from "../../components/Banner";
import { Card } from "../../components/Card";
import { Footer } from "../../components/Footer";
import {
  ChatCircle,
  Clock,
  CreditCard,
  CurrencyCircleDollar,
  GearSix,
  MagicWand,
  MapPin,
  Megaphone,
  Money,
  PaintBrushBroad,
  QrCode,
  Receipt,
  Storefront,
  UserCirclePlus,
  WhatsappLogo,
} from "phosphor-react";
import "./styles.scss";

export function Home() {
  return (
    <div>
      <Header />
      <Banner />
      <div id="container-home">
        <div id="home-content">
          <div className="title">
            <h2>Iniciando com 97 Delivery</h2>
          </div>
          <div className="cards">
            <Card
              icon={<UserCirclePlus weight="fill" />}
              text="Como criar minha Conta"
              id={"como-criar-minha-conta"}
            />

            <Card
              icon={<MagicWand weight="fill" />}
              text="Como criar meu App"
              id={"como-criar-meu-app"}
            />

            <Card
              icon={<Megaphone weight="fill" />}
              text="Como divulgar minha loja"
              id={"como-divulgar-minha-loja"}
            />
          </div>

          <div className="title">
            <h2>Configurando o Meu Negócio</h2>
          </div>
          <div className="cards">
            <Card
              icon={<Storefront weight="fill" />}
              text={"Editar minhas informações"}
              id={"editar-minhas-informacoes"}
            />

            <Card
              icon={<PaintBrushBroad weight="fill" />}
              text={"Temas e Cores"}
              id={"temas-e-cores"}
            />
            <Card
              icon={<QrCode weight="fill" />}
              text={"Métodos de Operação"}
              id={"metodos-de-operacao"}
            />
            <Card
              icon={<MapPin weight="fill" />}
              text={"Cadastrar Meu Enderenço"}
              id={"cadastrar-meu-endereco"}
            />
            <Card
              icon={<ChatCircle weight="fill" />}
              text={"Contatos e Mídias Sociais"}
              id={"contatos-e-midias-sociais"}
            />
            <Card
              icon={<Clock weight="fill" />}
              text={"Horários de Funcionamento"}
              id={"horarios-de-funcionamento"}
            />
            <Card
              icon={<Money weight="fill" />}
              text={"Taxas de Entrega"}
              id={"taxas-de-entrega"}
            />
            <Card
              icon={<CurrencyCircleDollar weight="fill" />}
              text={"Formas de Pagamento"}
              id={"formas-de-pagamento"}
            />
            <Card
              icon={<CreditCard weight="fill" />}
              text={"Pagamento Online"}
              id={"pagamento-online"}
            />
            <Card
              icon={<Receipt weight="fill" />}
              text={"Impressão de Comandas"}
              id={"impressao-de-comandas"}
            />
            <Card
              icon={<WhatsappLogo weight="fill" />}
              text={"Integração com WhatsApp"}
              id={"integracao-com-whatsapp"}
            />
            <Card
              icon={<GearSix weight="fill" />}
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
