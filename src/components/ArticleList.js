import React from "react";
import Article from "./Article.js";

function ArticleList({ posts }) {
console.log(posts);
    const renderArticles = posts.map((post) => {
        return <Article title={ post.title } date={ post.date } preview={ post.preview } key={ post.title } />
    })

  return (
    <main>
      { renderArticles }
    </main>
  );
}

export default ArticleList;
