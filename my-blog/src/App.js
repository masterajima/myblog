import "./App.css";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ArticlePage from "./pages/ArticlePage";
import ArticleList from "./pages/ArticleList";
import NotFound from "./pages/NotFound";
import NavBar from "../../card-component/src/NavBar";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <h1>My Awesome Blog</h1>
        <div id="page-body">Welcome to my blog</div>
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="/about" element={<AboutPage />} />
          <Route path="/article/:articleId" element={<ArticlePage />} />
          <Route path="/articles" element={<ArticleList />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
