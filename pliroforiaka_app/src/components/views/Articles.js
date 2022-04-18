import { motion } from "framer-motion";
import "../styles/Articles.css";
import "../styles/ErrorPage.css";
import { articles_info } from "../siteInfo";
import { useState } from "react";
import SearchBox from "../SearchBox";

const Articles = (state) => {
  const { changePageNameFn } = state;
  const [Term, setTerm] = useState("");

  return (
    <>
      <SearchBox setTerm={setTerm} />
      <span className="title"> Articles</span>
      <div className="myContainer">
        {articles_info
          .filter((val) => {
            console.log(Term);
            if (Term === "") return val;
            else if (
              val.article_title.toLowerCase().includes(Term.toLowerCase())
            )
              return val;
          })
          .map((val, key) => (
            <div className="card myCard mx-3" key={key + val.article_title}>
              <img
                className="card-img-top myimg"
                src={val.article_imgURL}
                alt="article"
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{val.article_title}</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <motion.button
                  className="btn mt-auto hover-dark c-bg-green bottom mybtn"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.1, type: "tween" }}
                > 
                  Read more
                </motion.button>
              </div>
            </div>
          ))}
      </div>
      <button
        type="button"
        className="btn btn-dark mt-5"
        onClick={() => changePageNameFn("Home")}
      >
        Back To Home Page
      </button>
    </>
  );
};

export default Articles;
