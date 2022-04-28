import { motion } from "framer-motion";
import "../styles/Articles.css";
import "../styles/ErrorPage.css";
import { articles_info } from "../siteInfo";
import staticData from "../../staticData"

const { articles } = staticData


const displayingResultsText = (searchTerm) => {
  return <span className="d-flex justify-content-center">Displaying results for: "{searchTerm}"</span>
}

const getFilteredArticles = (articles, Term, changePageNameFn) => {
  return Object.values(articles)
    .filter((article) => {
      // console.log(Term, val);
      if (!Term) return article;
      else if (article.title.toLowerCase().includes(Term.toLowerCase()))
        return article;
    })
    .map((article, key) => (
      <div className="card myCard mx-3" key={key + article.title}>
        <img
          className="card-img-top myimg"
          src={article.imgUrl}
          alt="article"
        />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{article.title}</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up
            the bulk of the card's content.
          </p>
          <motion.button
            className="btn mt-auto hover-dark c-bg-green bottom mybtn"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.1, type: "tween" }}
            onClick={() => changePageNameFn("Article", getArticleData(article.articleId))}
          >
            Read more
          </motion.button>
        </div>
      </div>
    ))
}

const getArticleData = (articleId) => {
  return articles[articleId]
}

const Articles = (state) => {
  const { changePageNameFn, searchTerm } = state;

  const filteredArticles = getFilteredArticles(articles, searchTerm, changePageNameFn)

  return (
    <>
      <span className="title">Articles</span>
      {searchTerm && displayingResultsText(searchTerm)}
      <div className="container article-container">
        {filteredArticles}
      </div>
      <button
        type="button"
        className="btn btn-dark mx-3 mb-3"
        onClick={() => changePageNameFn("Home")}
      >
        Back To Home Page
      </button>
    </>
  );
};

export default Articles;
