import { scrollToTop } from "../../utils/handleUtils";
import logoWhite from "../../assets/images/logo-white.svg";
import "./styles.scss";
import {
  CaretUp,
  FacebookLogo,
  InstagramLogo,
  YoutubeLogo,
} from "phosphor-react";

export function Footer() {
  return (
    <div id="footer">
      <div className="columns-footer-links">
        <div className="footer-links">
          <div className="col-1">
            <div className="text">Para você</div>
            <li>
              <a>Quero meu app</a>
            </li>
            <li>
              <a>Como funciona?</a>
            </li>
            <li>
              <a>Perguntas frequentes</a>
            </li>
            <li>
              <a>Preços</a>
            </li>
            <li>
              <a>Suporte</a>
            </li>
          </div>
          <div className="col-2">
            <div className="text">Informaçôes</div>
            <li>
              <a>Termos de uso</a>
            </li>
            <li>
              <a>Política de privacidade</a>
            </li>
          </div>
          <div className="col-3">
            <div className="text">Siga-nos</div>
            <a>
              <FacebookLogo size={32} />
            </a>
            <a>
              <InstagramLogo size={32} />
            </a>
            <a>
              <YoutubeLogo size={32} />
            </a>
          </div>
        </div>
      </div>

      <div className="columns-footer-copy">
        <div className="footer-copy">
          <div className="col-1">
            <a href="/">
              <img src={logoWhite} alt="" />
            </a>
          </div>
          <div className="col-2">
            <a target="_blank" href="https://francissportfolio.vercel.app/">
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
