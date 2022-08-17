import {
  CurrencyDollarSimple,
  DotsThreeCircleVertical,
  GearSix,
  Headset,
  List,
  Play,
  Question,
  SignOut,
} from "phosphor-react";
import logoBlack from "../../assets/images/logo-black.svg";
import logoWhite from "../../assets/images/logo-white.svg";
import "./styles.scss";

function showMenuMobile() {
  const navMobileOverlay = document.querySelector(".nav-mobile-overlay");
  const navMobile = document.querySelector(".nav-mobile");

  navMobileOverlay?.classList.add("show");
  navMobile?.classList.add("show");
}

function hiddeMenuMobile() {
  const navMobileOverlay = document.querySelector(".nav-mobile-overlay");
  const navMobile = document.querySelector(".nav-mobile");
  navMobileOverlay?.classList.remove("show");
  navMobile?.classList.remove("show");
}

export function Header() {
  return (
    <header id="header">
      <section>
        <a href="/">
          <img src={logoBlack} alt="Logo 97 Delivery (Black)" />
        </a>

        <nav className="nav">
          <a href="#">Comece GRÁTIS</a>
          <a href="#">Como funciona</a>
          <a href="#">Preços</a>
          <a href="#">Suporte</a>
          <a href="#">Sobre</a>
          <a href="#">Minha conta</a>
        </nav>

        <nav className="nav-mobile-button">
          <List size={32} onClick={showMenuMobile} />
        </nav>

        <div className="nav-mobile-overlay" onClick={hiddeMenuMobile}>
          <div className="nav-mobile">
            <img src={logoWhite} alt="Logo 97 Delivery (White)" />
            <div id="rule-light"></div>
            <ul>
              <li>
                <Play size={32} />
                <a href="#">Comece GRÁTIS</a>
              </li>
              <li>
                <GearSix size={32} />
                <a href="#">Como funciona</a>
              </li>
              <li>
                <CurrencyDollarSimple size={32} />
                <a href="#">Preços</a>
              </li>
              <li>
                <Headset size={32} />
                <a href="#">Suporte</a>
              </li>
              <li>
                <Question size={32} />
                <a href="#">Sobre</a>
              </li>
              <div id="rule-light"></div>
              <li>
                <SignOut size={32} />
                <a href="#">Minha conta</a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </header>
  );
}
