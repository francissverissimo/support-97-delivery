import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { treatKeyWords } from "../../utils/handleUtils";
import "./styles.scss";

export function Banner() {
  const [newSearch, setNewSearch] = useState("");
  const navigate = useNavigate();

  function searchKeyWords() {
    if (newSearch.trim() !== "") {
      const tratedKeyWords = treatKeyWords(newSearch);
      navigate(`/search/${tratedKeyWords}`);
    }
  }

  return (
    <div id="banner">
      <section>
        <div className="support-title">
          <h1>Suporte e Ajuda</h1>
          <p>Como podemos te servir?</p>
        </div>
        <div className="search-bar">
          <input
            type="text"
            onChange={(event) => setNewSearch(event.target.value)}
            value={newSearch}
          />
          <button onClick={searchKeyWords}>Pesquisar</button>
        </div>
      </section>
    </div>
  );
}
