import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Article } from "./pages/Article";
import { Home } from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/article" element={<Article />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
