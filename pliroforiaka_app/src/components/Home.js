import "./Home.css";
import HomeCard from "./HomeCard";

const Home = () => {
  return (
    <>
      <div id="carouselExampleFade" className="carousel slide carousel-fade carousel-dark" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://www.eu4environment.org/app/uploads/2020/09/1-policies-for-green-economy.jpg" className="d-block w-100" alt="make it green" />
            <div class="carousel-caption d-none d-md-block">
              <h3>Make it Green</h3>
              <p>Καλώς ορίσατε στην ιστοσελίδα μας.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="https://images.unsplash.com/photo-1509390874189-d75fd22f19f7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" className="d-block w-100" alt="reusable energy" />
            <div class="carousel-caption d-none d-md-block">
              <h5>Ανανεώσιμες πηγές ενέργειας</h5>
            </div>
          </div>
          <div className="carousel-item">
            <img src="https://images.unsplash.com/photo-1569000971952-6d0b63581174?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" className="d-block w-100" alt="no waste" />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className="container my-5">
        <div class="card-group">
          <HomeCard />
          <HomeCard />
          <HomeCard />
        </div>
      </div>
      <footer>
        <div>
          <a href="https://www.youtube.com">
            <img border="0" alt="YouTube" src="https://icons.iconarchive.com/icons/graphics-vibe/classic-3d-social/256/youtube-icon.png" height="50" />
          </a>
          <a href="https://www.twitter.com">
            <img border="0" alt="Twitter" src="https://icons.iconarchive.com/icons/limav/flat-gradient-social/512/Twitter-icon.png" height="50" />
          </a>
          <a href="https://www.reddit.com">
            <img border="0" alt="Reddit" src="https://icons.iconarchive.com/icons/uiconstock/socialmedia/256/Reddit-icon.png" height="50" />
          </a>
          <a href="https://www.instagram.com">
            <img border="0" alt="Instagram" src="https://icons.iconarchive.com/icons/designbolts/free-instagram/256/Active-Instagram-3-icon.png" height="45" />
          </a>
        </div>
      </footer>
    </>
  );
};

export default Home;
