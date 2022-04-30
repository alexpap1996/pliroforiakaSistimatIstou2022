import "../styles/Profile.css";

const Profile = (state) => {
  return (
    <div>
      <div className="container-xl px-4 mt-4">
        <nav className="nav nav-borders">
          <a className="nav-link active ms-0" href="#">
            Προφίλ
          </a>
        </nav>
        <hr className="mt-0 mb-4" />
        <div className="row">
          <div className="col-xl-4">
            <div className="card mb-4 mb-xl-0">
              <div className="card-header">Φωτογραφία Προφίλ</div>
              <div className="card-body text-center">
                <img
                  className="profileImg rounded-circle mb-2"
                  src="https://i.ytimg.com/vi/sICbEUfSljs/hqdefault.jpg"
                  alt=""
                />
                <div className="small font-italic text-muted mb-4">
                  JPG ή PNG μέχρι 5MB
                </div>
                <button className="btn btn-primary" type="button">
                  Aνεβάστε νέα εικόνα
                </button>
              </div>
            </div>
          </div>
          <div className="col-xl-8">
            <div className="card mb-4">
              <div className="card-header">Λεπτομέριες Λογαριασμού</div>
              <div className="card-body">
                <form>
                  <div className="mb-3">
                    <label className="small mb-1" for="username"></label>
                    <input
                      className="form-control"
                      id="username"
                      type="text"
                      placeholder="Όνομα χρήστη..."
                    />
                  </div>
                  <div className="row gx-3 mb-3">
                    <div className="col-md-6">
                      <label
                        className="small mb-1"
                        for="firstName"
                      ></label>
                      <input
                        className="form-control"
                        id="firstName"
                        type="text"
                        placeholder="Όνομα..."
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="small mb-1" for="lastName"></label>
                      <input
                        className="form-control"
                        id="lastName"
                        type="text"
                        placeholder="Επώνυμο..."
                      />
                    </div>
                  </div>
                  <div className="mb-3">
                    <label
                      className="small mb-1"
                      for="email"
                    ></label>
                    <input
                      className="form-control"
                      id="email"
                      type="email"
                      placeholder="Διεύθυνση email..."
                    />
                  </div>
                  <button className="btn btn-primary" type="button">
                    Αποθήκευση
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
