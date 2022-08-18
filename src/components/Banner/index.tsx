import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { treatKeyWords } from "../../utils/handleUtils";
import "./styles.scss";

type Params = { keyWords: string };

export function Banner() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const params = useParams() as Params;

  function browsePageSearchWithKeywords() {
    if (search.trim() === "" || search.length <= 3 || params.keyWords == search)
      return;

    const tratedKeyWords = treatKeyWords(search);

    navigate(`/search/${tratedKeyWords}`);
  }

  return (
    <div id="banner">
      <section>
        <div className="support-title">
          <h1>Suporte e Ajuda</h1>
          <p>Como podemos te servir?</p>
        </div>

        <div className="search-bar">
          <div>
            <input
              type="text"
              onChange={(event) => setSearch(event.target.value)}
              value={search}
            />
            <button onClick={browsePageSearchWithKeywords}>Pesquisar</button>
          </div>

          {search.length > 0 && search.length <= 3 && (
            <p id="input-warnig">
              {"Digite pelo menos 3 caracteres para pesquisar..."}
            </p>
          )}
        </div>
      </section>
    </div>
  );
}
