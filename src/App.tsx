import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Home } from "./pages/Home";
import { Article } from "./pages/Article";
import { SearchPage } from "./pages/SearchPage";

import { PopularArticlesContextProvider } from "./contexts/PopularArticlesContext";

function App() {
  return (
    <BrowserRouter>
      <PopularArticlesContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/article/:id" element={<Article />} />
          <Route path="/search/:keyWords" element={<SearchPage />} />
        </Routes>
      </PopularArticlesContextProvider>
    </BrowserRouter>
  );
}

export default App;
