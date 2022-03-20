import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Article } from "./pages/Article";
import { Home } from "./pages/Home";

import { PopularArticlesContextProvider } from "./contexts/PopularArticlesContext";

function App() {
  return (
    <BrowserRouter>
      <PopularArticlesContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/article/:id" element={<Article />} />
        </Routes>
      </PopularArticlesContextProvider>
    </BrowserRouter>
  );
}

export default App;
