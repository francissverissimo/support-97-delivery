import logoBlack from "../assets/images/long-logo-black.png";
import logoWhite from "../assets/images/long-logo-white.png";

import "../styles/header.scss";

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
        <a href="https://zapdelivery.me/">
          <img src={logoBlack} alt="Logo Zap Delivery (Black)" />
        </a>
        <nav className="nav">
          <a href="https://zapdelivery.me/minhaconta/entrar#iniciar">
            Comece GRÁTIS
          </a>
          <a href="https://zapdelivery.me/#como">Como funciona</a>
          <a href="https://zapdelivery.me/#precos">Preços</a>
          <a href="https://zapdelivery.me/suporte">Suporte</a>
          <a href="https://zapdelivery.me/#faq">Sobre</a>
          <a href="https://zapdelivery.me/minhaconta/entrar">Minha conta</a>
        </nav>
        <div className="nav-mobile-overlay">
          <div className="nav-mobile" onMouseLeave={hiddeMenuMobile}>
            <img src={logoWhite} alt="Logo Zap Delivery (White)" />
            <div id="rule-light"></div>
            <ul>
              <li>
                <i className="fa fa-play"></i>
                <a href="https://zapdelivery.me/minhaconta/entrar#iniciar">
                  Comece GRÁTIS
                </a>
              </li>
              <li>
                <i className="fa fa-cogs"></i>
                <a href="https://zapdelivery.me/#como">Como funciona</a>
              </li>
              <li>
                <i className="fa fa-dollar-sign"></i>
                <a href="https://zapdelivery.me/#precos">Preços</a>
              </li>
              <li>
                <i className="fa fa-headset"></i>
                <a href="https://zapdelivery.me/suporte">Suporte</a>
              </li>
              <li>
                <i className="fa fa-question-circle"></i>
                <a href="https://zapdelivery.me/#faq">Sobre</a>
              </li>
              <div id="rule-light"></div>
              <li>
                <i className="fa fa-sign-in-alt"></i>
                <a href="https://zapdelivery.me/minhaconta/entrar">
                  Minha conta
                </a>
              </li>
            </ul>
          </div>
        </div>
        <nav className="nav-mobile-button">
          <i onClick={showMenuMobile} className="fa fa-bars"></i>
        </nav>
      </section>
    </header>
  );
}
