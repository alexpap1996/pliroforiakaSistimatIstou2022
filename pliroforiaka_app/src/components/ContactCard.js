import "./ContactCard.css";

const ContactCard = (props) => {
  return (
    <div className="container ">
      <div className="card text-white  my-3">
        <div className="row g-0 cardBg">
          <div className="col-md-2">
            <div className="ratio ratio-1x1">
              <img
                src={props.imgUrl}
                className="noFilter img-fluid rounded-start embed-responsive embed-responsive-16by9"
                alt=""
              />
            </div>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{props.title}</h5>
              <p className="card-text">{props.text}</p>
              <p className="card-text">
                <b>MEDIA INQUIRIES</b>
                <span>
                  <br />
                  <b>{props.email}</b>
                  <br />
                  <b>{props.phone}</b>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
