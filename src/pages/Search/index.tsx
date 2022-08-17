import { Header } from "../../components/Header";
import { Banner } from "../../components/Banner";
import { SearchResult } from "../../components/SearchResult";
import { Footer } from "../../components/Footer";
import { useSearchPage } from "../../hooks/useSearchPage";
import "./styles.scss";

export function SearchPage() {
  const { returnedArticles } = useSearchPage();

  return (
    <div id="search-page">
      <Header />
      <Banner />
      <div id="search-page-content">
        <div id="numberResults">
          {returnedArticles.length > 0
            ? `${returnedArticles.length} resultado${
                returnedArticles.length !== 1 ? "s" : ""
              }`
            : `Nenhum resultado encontrado`}
        </div>

        {returnedArticles.length > 0 &&
          returnedArticles.map((e) => {
            return (
              <SearchResult
                key={e.id}
                id={e.id}
                title={e.title}
                description={e.description}
              />
            );
          })}
      </div>
      <Footer />
    </div>
  );
}
