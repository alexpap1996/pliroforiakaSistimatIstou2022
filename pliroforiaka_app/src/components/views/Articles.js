import { motion } from "framer-motion";
import "../styles/Articles.css";
import water from "../../resources/water.jpg";
import evoia from "../../resources/evoia.jpg";
import bitcoin from "../../resources/bitcoin.jpg";
import gardening from "../../resources/gardening.png";
import solarenergy from "../../resources/solar-energy.png";

import "../styles/ErrorPage.css";

const articles_info = [
  {
    article_title: "Protect your groundwater",
    article_description: "Article Description",
    article_imgURL: water,
  },
  {
    article_title: "Fire Hazard Protection",
    article_description: "Article Description",
    article_imgURL: evoia,
  },
  {
    article_title: "Bitcoin under pressure to adopt more sustainable practices",
    article_description: "Article Description",
    article_imgURL: bitcoin,
  },
  {
    article_title: "Eco friendly gardening",
    article_description: "Article Description",
    article_imgURL: gardening,
  },
  {
    article_title: "Solar Energy",
    article_description: "Article Description",
    article_imgURL: solarenergy,
  },
];

function Articles(state) {
  const { changePageNameFn } = state;
  return (
    <>
      {/* <div className="d-flex flex-column align-items-center justify-content-center body-full">
        <h1 className="flex-column">Articles</h1>
        <h2 className="flex-column">Under Construction</h2> */}
      <span className="asdf"> Articles</span>

      {/* <div className="articles_test">
        {articles_info.map((articles_info, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="article_item"
            key={articles_info + index}
          >
            <img
              src={articles_info.article_imgURL}
              alt={articles_info.article_title}
            />
            <h4 className="article_title" style={{ marginTop: 20 }}>
              {articles_info.article_title}
            </h4>

            <button
              className="btn hover-dark c-bg-green"
              onClick={() => changePageNameFn("Article")}
            >
              Read more
            </button>
          </motion.div>
        ))}
      </div> */}
      <div className="myContainer">
        {articles_info.map((articles_info, index) => (
          <div className="card myCard mx-3">
            <img
              className="card-img-top myimg"
              src={articles_info.article_imgURL}
              alt="article"
            />
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">{articles_info.article_title}</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <button className="btn mt-auto hover-dark c-bg-green bottom mybtn">
                Read more
              </button>
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
      {/* </div> */}
    </>
  );
}

export default Articles;
