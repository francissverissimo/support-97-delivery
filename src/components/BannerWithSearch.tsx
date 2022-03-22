import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "../styles/bannerWithSearch.scss";

export function cleanKeyWords(keyWords: string) {
  return keyWords
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // remover acentos
    .replace(/([^\w]+|\s+)/g, " ") // remover caracteres especiais
    .split(" ")
    .filter(e => {
      return e.length > 3;
    });
}

export function BannerWithSearch() {
  const [newSearch, setNewSearch] = useState("");
  const navigate = useNavigate();

  function searchKeyWords() {
    if (newSearch.trim() !== "") {
      const tratedKeyWords = cleanKeyWords(newSearch);
      navigate(`/search/${tratedKeyWords}`);
    }
  }

  return (
    <div id="banner-with-search">
      <section>
        <div className="support-title">
          <h1>Suporte e Ajuda</h1>
          <p>Como podemos te servir?</p>
        </div>
        <div className="search-bar">
          <input
            type="text"
            onChange={event => setNewSearch(event.target.value)}
            value={newSearch}
          />
          <button onClick={searchKeyWords}>Pesquisar</button>
        </div>
      </section>
    </div>
  );
}
