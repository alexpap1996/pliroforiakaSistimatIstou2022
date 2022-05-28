import { motion } from "framer-motion";
import { useState } from "react";
import "../styles/Articles.css";
import "../styles/ErrorPage.css";




const displayingResultsText = (searchTerm, numOfArticles) => {
  return (
    <div className="d-flex flex-column align-items-center">
      <span className="">Displaying results for: "{searchTerm}"</span>
      <span>{numOfArticles} articles found</span>
    </div>
  );
};

const getFilteredArticles = (articles, Term, changePageNameFn , author_id) => {
  return articles
    .filter((article) => {
      if (!Term) return article;
      else if (article.title.toLowerCase().includes(Term.toLowerCase()))
        return article;
    })
    .map((article, key) => (
      <div className="card myCard mx-3" key={key + article.title}>
        <img
          className="card-img-top myimg"
          src={article.image?.url}
          alt="article"
        />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{article.title}</h5>
          <p className="card-text">{article.description}</p>
        </div>
        <div className="btn_container">
          <motion.button
            className="btn mt-auto hover-dark c-bg-green bottom mybtn"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.1, type: "tween" }}
            onClick={() => changePageNameFn("Article", article)}
          >
            Read more
          </motion.button>
          {/* author_id === article.author */}
           {( author_id === article.author ) ?( 
          <motion.button
            className="btn btn-dark mt-auto hover-dark bottom right_button"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.1, type: "tween" }}
            onClick={() => changePageNameFn("EditArticle", article)}
          >
            Edit article
          </motion.button>
           ) : <></> }
          

        </div>
      </div>
    ));
};

const Articles = (state) => {

  const { getArticlesFn ,changePageNameFn, searchTerm , posts , author_id } = state;
  const filteredArticles = getFilteredArticles(posts, searchTerm, changePageNameFn , author_id );
  
  return (
    <>
      <span className="title">Articles</span>
      {searchTerm && displayingResultsText(searchTerm, filteredArticles.length)}
      <div className="container article-container">{filteredArticles}</div>
      <div className="containerCenter mt-3">
      </div>
      <button
        type="button"
        className="btn btn-dark mx-3 mb-3"
        onClick={() => changePageNameFn("Home")}
      >
        Back To Home Page
      </button>

      <button
        type="button"
        className="btn btn-dark mx-3 mb-3"
        onClick={() => changePageNameFn("CreateArticle")}
      >
        Create New Article
      </button>
    </>
  );
};

export default Articles;
