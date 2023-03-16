import articles from "./article-content";
import React from "react";
import { Link } from "react-router-dom";

const ArticleList = () => {
  return;
  <div>
    <h1>This is articleList</h1>;
    {articles.map((article) => (
      <Link
        key={article.name}
        className="article-list-item"
        to={`/articles/${article.name}`}
      >
        <h3>{article.title}</h3>
        <p>{article.content[0].substring(0, 150)}</p>
      </Link>
    ))}
  </div>;
};
export default ArticleList;
