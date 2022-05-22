import "../styles/article.css";
import { motion } from "framer-motion";
import Axios from "axios";

const Article = (state) => {
  const { changePageNameFn } = state;
  const {
    title,
    body,
    imgUrl,
    authorId,
    dateCreated,
    articleId,
    articleDescription,
  } = state.pageData;

  const addLike = (e) => {
    e.preventDefault();

    Axios.post("/addLike")
      .then((res) => {console.log(res)})
      .catch((e) => console.log(e));
      //update like button
  };

  const date = new Date(dateCreated);
  return (
    <>
      <div className="article-body ">
        <header
          style={{
            backgroundImage: `url(${imgUrl})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <h1 className="my-5">{title}</h1>
        </header>
        <main>
          <p>{body}</p>
          <strong>
            <p className="date">
              {date.toLocaleDateString("el-GR", {
                weekday: "long",
                month: "long",
                day: "2-digit",
                year: "numeric",
              })}
            </p>
          </strong>
        </main>
      </div>
      <div className="container mb-5">
        <motion.button
          className="btn mt-auto hover-dark c-bg-green bottom mybtn"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.1, type: "tween" }}
          onClick={() => changePageNameFn("Articles")}
        >
          Επιστροφή στα Άρθρα
        </motion.button>
        <a
          href="https://europa.eu/next-generation-eu/make-it-green_en"
          target="_blank"
          rel="noreferrer"
        >
          <motion.button
            className="btn mt-auto hover-dark c-bg-green bottom mybtn mx-3"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.1, type: "tween" }}
          >
            Πηγή
          </motion.button>
        </a>
        <motion.button
          className="btn mt-auto hover-dark c-bg-green bottom mybtn right"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.1, type: "tween" }}
          onClick={addLike}
        >
          Like
        </motion.button>
      </div>
    </>
  );
};

export default Article;
