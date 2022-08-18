import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Home } from "./pages/Home";
import { Article } from "./pages/Article";
import { SearchPage } from "./pages/Search";
import { NotFound } from "./pages/NotFound";

import { PopularArticlesContextProvider } from "./contexts/PopularArticlesContext";

function App() {
  return (
    <BrowserRouter>
      <PopularArticlesContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/article/:id" element={<Article />} />
          <Route path="/search/:keyWords" element={<SearchPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </PopularArticlesContextProvider>
    </BrowserRouter>
  );
}

export default App;
