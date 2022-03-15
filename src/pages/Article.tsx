import { Header } from "../components/Header";

import "../styles/article.scss";

export function Article() {
  return (
    <div>
      <Header />
      <div id="banner-article">
        <div className="support-title">
          <h1>Suporte e AJuda</h1>
          <p>Como podemos te servir?</p>
        </div>
        <div className="search-bar">
          <input type="text" />
          <button>Pesquisar</button>
        </div>
      </div>
      <div id="container">
        <div id="content-article">
          <h2 className="title">Introdução</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec erat
            sed est dapibus porttitor. Morbi id vehicula magna. Donec id viverra
            sem. Ut commodo, erat in viverra suscipit, est sem vehicula ex.
          </p>
          <p>
            Aliquam mollis sodales lacus, a ornare metus sagittis et. Proin odio
            leo, vulputate vel eros quis, mattis faucibus ligula. Praesent et
            tempus sapien. Praesent suscipit in libero ut tincidunt. Nunc augue
            sem, dictum eu varius eu, finibus et felis. Aenean neque mauris.
          </p>
          <p>
            Donec ultricies est augue, quis cursus erat pellentesque commodo.
            Maecenas semper vitae tortor nec porta. Nullam rhoncus congue nibh
            quis finibus. Suspendisse vel mi efficitur, tincidunt odio vel,
            vestibulum arcu. Praesent aliquam blandit felis, a maximus ex
            elementum vel. Mauris sed tellus in dolor lobortis pretium. Morbi et
            mauris et sem scelerisque egestas.
          </p>
        </div>
        <aside id="sidebar">
          <h3 className="title">Populares</h3>
          <ul>
            <li>Primeiros passos no programa?</li>
            <li>Como criar uma chave para utilizar os mapas do Google?</li>
            <li>Como configurar um IP fixo no Computador Servidor?</li>
            <li>Como configurar a versão rede entre vários computadores?</li>
            <li>Como Integrar o Programa ao iFood?</li>
          </ul>
        </aside>
      </div>
    </div>
  );
}
