import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { ResultsSearch } from "../components/ResultSearch";
import { useSearchPage } from "../hooks/useSearchPage";
import { BannerWithSearch } from "../components/BannerWithSearch";

import "../styles/searchPage.scss";

export function SearchPage() {
  const { returnedArticles } = useSearchPage();
  
  return (
    <div id="search-page">
      <Header />
      <BannerWithSearch />
      <div id="search-page-content">
        <div id="numberResults">
          {returnedArticles.length > 0 ? (
            `${returnedArticles.length} resultado${
              returnedArticles.length !== 1 ? "s" : ""
            }`
          ) : (
            `Nenhum resultado encontrado`
          )}
        </div>

        {returnedArticles.length > 0 &&
          returnedArticles.map(e => {
            return (
              <ResultsSearch
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
