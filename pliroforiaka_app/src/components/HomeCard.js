import "./HomeCard.css";

const HomeCard = () => {
  return (
    <div className="card homeCard mx-3">
      <img src="https://www.firstbenefits.org/wp-content/uploads/2017/10/placeholder.png" className="card-img-top" alt="article" />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="ArticleLinkPlaceholder" className="btn btn-primary">
          Link to Article
        </a>
      </div>
    </div>
  );
};

export default HomeCard;
