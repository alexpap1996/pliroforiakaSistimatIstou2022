import "./HomeCard.css";
import "./styles/Articles.css";
import "./styles/ErrorPage.css";

const HomeCard = (props) => {
  const link = "http://localhost:5000/articles/" + props.article.id;

  const handleClick = async () => {
    const id = props.article.id;
    await fetch("http://localhost", {
      method: "GET",
      body: id,
    });
  };

  return (
    <div className="card homeCard mx-3">
      <img
        src={props.article.article_imgURL}
        className="card-img-top myimg"
        alt="article"
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{props.article.article_title}</h5>
        <p className="card-text">{props.article.article_description}</p>
        <a
          onClick={handleClick}
          href={link}
          className="btn mt-auto hover-dark c-bg-green bottom mybtn"
          method="get"
        >
          Link to Article
        </a>
      </div>
    </div>
  );
};

export default HomeCard;
