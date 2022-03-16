import logoWhite from "../assets/images/long-logo-white.png";

import "../styles/footer.scss";

export function Footer() {
  return (
    <div id="footer">
      <div className="columns-footer-links">
        <div className="footer-links">
          <div className="col-1">
            <div className="text">Para você</div>
            <li>
              <a href="https://zapdelivery.me/minhaconta/entrar#iniciar">
                Quero meu app
              </a>
            </li>
            <li>
              <a href="https://zapdelivery.me/#como">Como funciona?</a>
            </li>
            <li>
              <a href="https://zapdelivery.me/#faq">Perguntas frequentes</a>
            </li>
            <li>
              <a href="https://zapdelivery.me/#precos">Preços</a>
            </li>
            <li>
              <a href="https://zapdelivery.me/suporte">Suporte</a>
            </li>
          </div>
          <div className="col-2">
            <div className="text">Informaçôes</div>
            <li>
              <a href="https://zapdelivery.me/termos">Termos de uso</a>
            </li>
            <li>
              <a href="https://zapdelivery.me/privacidade">
                Política de privacidade
              </a>
            </li>
          </div>
          <div className="col-3">
            <div className="text">Siga-nos</div>
            <a href="https://facebook.com/zapdeliveryapp">
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a href="https://instagram.com/zapdeliveryapp">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="https://www.youtube.com/channel/UC_zVynmvliQtYxsXnktLuMg">
              <i className="fa-brands fa-youtube"></i>
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
            © 2006-2020 - Todos os direitos reservados.
            <br />
            MacroStudio - CNPJ 08.808.708/0001-85
            <br />
            Empresa Brasileira
          </div>
          <div className="col-3">
            <a href="#header">
              <i className="fa fa-arrow-up"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
