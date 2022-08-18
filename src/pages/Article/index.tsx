import { useNavigate, useParams } from "react-router-dom";
import { firebase, database } from "../../services/firebase";
import { usePopularArticlesContext } from "../../hooks/usePopularArticlesContext";
import { useArticle } from "../../hooks/useArticle";
import { Markup } from "interweave";
import { Header } from "../../components/Header";
import { Banner } from "../../components/Banner";
import { Footer } from "../../components/Footer";
import { Loading } from "../../components/Loading";
import { ThumbsDown, ThumbsUp } from "phosphor-react";
import "./styles.scss";

type ArticleParams = {
  id: string;
};

export function Article() {
  const navigate = useNavigate();
  const { popularArticles } = usePopularArticlesContext();
  const params = useParams() as ArticleParams;
  const id = params.id;
  const { article } = useArticle(id);

  async function sortArticleWithUseful() {
    const docRef = database.collection("articles").doc(id);

    await docRef.update({
      "rate.useful": firebase.firestore.FieldValue.increment(1),
    });
  }

  async function sortArticleWithUseless() {
    const docRef = database.collection("articles").doc(id);

    await docRef.update({
      "rate.useless": firebase.firestore.FieldValue.increment(1),
    });
  }

  async function browseAmongRelated(text: string) {
    navigate(`/article/${text}`);
  }

  return (
    <>
      <Header />
      <Banner />

      {!article ? (
        <Loading />
      ) : (
        <div id="container-article">
          <div id="content-article">
            <h2 className="title">{article.title}</h2>
            <span id="category">
              Categoria:
              <a href={`/category/${article.category.id}`}>
                {article.category.title}
              </a>
            </span>
            <Markup content={article.body} />
            <span id="tags">
              {"Tags: "}
              {article.tags.map((e) => {
                return (
                  <a key={e} href={`/search/${e}`}>
                    {e}
                  </a>
                );
              })}
            </span>

            <div id="rate">
              <h4>Isso foi útil?</h4>
              <div id="rateButtons">
                <ThumbsUp
                  id="usefull"
                  size={32}
                  onClick={sortArticleWithUseful}
                  weight="fill"
                />
                <ThumbsDown
                  id="useless"
                  size={32}
                  onClick={sortArticleWithUseless}
                  weight="fill"
                />
              </div>
            </div>
          </div>

          <aside id="sidebar">
            <div>
              <h3 className="title">Populares</h3>
              <ul>
                {popularArticles?.map(({ id, title }) => {
                  return (
                    <li key={id}>
                      <a onClick={() => browseAmongRelated(id)}>{title}</a>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div>
              <h3 className="title">Relacionados</h3>
              <ul>
                {article.related.map((relatedArticle) => {
                  return (
                    <li key={relatedArticle.id}>
                      <a onClick={() => browseAmongRelated(relatedArticle.id)}>
                        {relatedArticle.title}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </aside>
        </div>
      )}
      <Footer />
    </>
  );
}
