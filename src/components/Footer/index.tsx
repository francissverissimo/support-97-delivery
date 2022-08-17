import { scrollToTop } from "../../utils/handleUtils";
import logoWhite from "../../assets/images/logo-white.svg";
import "./styles.scss";
import { CaretUp, FacebookLogo, InstagramLogo, YoutubeLogo } from "phosphor-react";

export function Footer() {
  return (
    <div id="footer">
      <div className="columns-footer-links">
        <div className="footer-links">
          <div className="col-1">
            <div className="text">Para você</div>
            <li>
              <a href="#">Quero meu app</a>
            </li>
            <li>
              <a href="#">Como funciona?</a>
            </li>
            <li>
              <a href="#">Perguntas frequentes</a>
            </li>
            <li>
              <a href="#">Preços</a>
            </li>
            <li>
              <a href="#">Suporte</a>
            </li>
          </div>
          <div className="col-2">
            <div className="text">Informaçôes</div>
            <li>
              <a href="">Termos de uso</a>
            </li>
            <li>
              <a href="#">Política de privacidade</a>
            </li>
          </div>
          <div className="col-3">
            <div className="text">Siga-nos</div>
            <a href="#">
              <FacebookLogo size={32} />
            </a>
            <a href="#">
              <InstagramLogo size={32} />
            </a>
            <a href="#">
              <YoutubeLogo size={32} />
            </a>
          </div>
        </div>
      </div>
      <div className="columns-footer-copy">
        <div className="footer-copy">
          <div className="col-1">
            <img src={logoWhite} alt="" />
          </div>
          <div className="col-2">
            <a href="https://francissportfolio.vercel.app/">
              {"Francis Verissimo "}
            </a>
            {"© 2022"}
            <br />
          </div>
          <div className="col-3">
            <div>
              <a onClick={scrollToTop}>
                <CaretUp size={42} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
