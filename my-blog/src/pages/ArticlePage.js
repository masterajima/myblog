import React from "react";
import { Params } from "react-router";
import articles from "./article-content";
import NotFound from "./NotFound";
const ArticlePage = () => {
  const article = articles.find((article) => article.name == articleId);
  if (!article) {
    return <NotFound />;
  }
  //hook
  const params = params();
  const articleId = params.articleId;

  return;
  <div>
    <h1>This is articleList</h1>;
    {articles.map((article) => (
      <div>
        <h3>{article.title}</h3>
        <p>{article.content[0].substring(0, 150)}</p>
      </div>
    ))}
  </div>;
};

export default ArticlePage;
