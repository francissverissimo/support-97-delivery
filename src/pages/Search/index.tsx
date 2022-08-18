import { useSearch } from "../../hooks/useSearch";
import { Header } from "../../components/Header";
import { Banner } from "../../components/Banner";
import { Loading } from "../../components/Loading";
import { SearchResult } from "../../components/SearchResult";
import { Footer } from "../../components/Footer";
import "./styles.scss";

export function SearchPage() {
  const { returnedArticles } = useSearch();

  return (
    <div id="search-page">
      <Header />
      <Banner />
      {!returnedArticles ? (
        <Loading />
      ) : (
        <div id="search-page-content">
          {returnedArticles && (
            <div id="numberResults">
              {returnedArticles.length > 0
                ? `${returnedArticles.length} resultado${
                    returnedArticles.length !== 1 ? "s" : ""
                  }`
                : `Nenhum resultado encontrado`}
            </div>
          )}

          {returnedArticles.length > 0 &&
            returnedArticles.map(({ id, title, description }) => {
              return (
                <SearchResult
                  key={id}
                  id={id}
                  title={title}
                  description={description}
                />
              );
            })}
        </div>
      )}
      <Footer />
    </div>
  );
}
