import { motion } from "framer-motion";
import "../styles/Articles.css";
import "../styles/ErrorPage.css";
import staticData from "../../staticData";

// const url = "http://localhost:3000/articles";

// const fetchData = axios.get(url)
// .then( response => {
// console.log(response.data)
// })


const { articles } = staticData

const displayingResultsText = (searchTerm, numOfArticles) => {
  return (
    <div className="d-flex flex-column align-items-center">
      <span className="">Displaying results for: "{searchTerm}"</span>
      <span>{numOfArticles} articles found</span>
    </div>
  )
}

const getFilteredArticles = (articles, Term, changePageNameFn) => {
  return Object.values(articles)
    .filter((article) => {
      if (!Term) return article;
      else if (article.title.toLowerCase().includes(Term.toLowerCase()))
        return article;
    })
    .map((article, key) => (
      <div className="card myCard mx-3" key={key + article.title}>
        <img
          className="card-img-top myimg"
          src={'https://res.cloudinary.com/dgzlym20q/image/upload/v1652174176/makeItGreen/water_sj3yqk.jpg'}
          alt="article"
        />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{article.title}</h5>
          <p className="card-text">{article.articleDescription}</p>
          <motion.button
            className="btn mt-auto hover-dark c-bg-green bottom mybtn"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.1, type: "tween" }}
            onClick={() => changePageNameFn("Article", getArticleData(article._id))}
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
  const { changePageNameFn, searchTerm , posts} = state;
  console.log(posts)

  const filteredArticles = getFilteredArticles(posts, searchTerm, changePageNameFn)

  return (
    <>
      <span className="title">Articles</span>
      {searchTerm && displayingResultsText(searchTerm, filteredArticles.length)}
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