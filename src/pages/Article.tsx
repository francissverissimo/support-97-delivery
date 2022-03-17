import { useParams } from "react-router-dom";
import { Markup } from "interweave";

import { firebase, database } from "../services/firebase";

import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

import "../styles/article.scss";
import { useArticle } from "../hooks/useArticle";

type ArticleParams = {
  doc: string;
};

export function Article() {
  const params = useParams() as ArticleParams;
  const doc = params.doc;

  const article = useArticle(doc);

  async function sortArticleWithUseful() {
    const docRef = database.collection("articles").doc(doc);

    await docRef.update({
      "rate.useful": firebase.firestore.FieldValue.increment(1)
    });
  }

  async function sortArticleWithUseless() {
    const docRef = database.collection("articles").doc(doc);

    await docRef.update({
      "rate.useless": firebase.firestore.FieldValue.increment(1)
    });
  }

  return (
    <div>
      <Header />
      <div id="banner-article">
        <section>
          <div className="support-title">
            <h1>Suporte e Ajuda</h1>
            <p>Como podemos te servir?</p>
          </div>
          <div className="search-bar">
            <input type="text" />
            <button>Pesquisar</button>
          </div>
        </section>
      </div>
      <div id="container-article">
        <div id="content-article">
          <h2 className="title">{article?.title}</h2>
          <Markup content={article?.body} />
        </div>
        <aside id="sidebar">
          <h3 className="title">Populares</h3>
          <ul>
            <li>
              <a href="#">Primeiros passos no programa?</a>
            </li>
            <li>
              <a href="#">
                Como criar uma chave para utilizar os mapas do Google?
              </a>
            </li>
            <li>
              <a href="#">Como configurar um IP fixo no Computador Servidor?</a>
            </li>
            <li>
              <a href="#">
                Como configurar a versão rede entre vários computadores?
              </a>
            </li>
            <li>
              <a href="#">Como Integrar o Programa ao iFood?</a>
            </li>
          </ul>
        </aside>
      </div>
      <div id="rate">
        <h4>Isso foi útil?</h4>
        <div id="rateButtons">
          <i id="useful" className="fa-solid fa-thumbs-up" onClick={sortArticleWithUseful}></i>
          <i id="useless" className="fa-solid fa-thumbs-down" onClick={sortArticleWithUseless}></i>
        </div>
      </div>
      <Footer />
    </div>
  );
}
