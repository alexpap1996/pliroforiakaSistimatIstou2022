import "./HomeCard.css";
import { motion } from "framer-motion";

const HomeCard = (props) => {
  const changePageName = props.changePageNameFn
  return (
    <div className="card myCard mx-3">
      <img
        src={props.article.imgUrl}
        className="card-img-top myimg"
        alt="article"
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{props.article.title}</h5>
        <p className="card-text">{props.article.body}</p>
        <motion.button
          className="btn mt-auto hover-dark c-bg-green bottom mybtn"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.1, type: "tween" }}
          onClick={() => changePageName("Article", props.article)}
        >
          Read more
        </motion.button>
      </div>
    </div>
  );
};

export default HomeCard;
