import "../styles/article.css";
import { motion } from "framer-motion";

const Article = (state) => {
  const {
    title,
    body,
    imgUrl,
    authorId,
    dateCreated,
    articleId,
    articleDescription,
  } = state.pageData;
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
        </main>
      </div>
      <div className="container mb-5">
      <motion.button
          className="btn mt-auto hover-dark c-bg-green bottom mybtn"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.1, type: "tween" }}
        >
          Επιστροφή στα Άρθρα
        </motion.button>
        <motion.button
          className="btn mt-auto hover-dark c-bg-green bottom mybtn mx-3"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.1, type: "tween" }}
        >
          Πηγή
        </motion.button>
        <motion.button
          className="btn mt-auto hover-dark c-bg-green bottom mybtn right"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.1, type: "tween" }}
        >
          Like
        </motion.button>
      </div>
    </>
  );
};

export default Article;
