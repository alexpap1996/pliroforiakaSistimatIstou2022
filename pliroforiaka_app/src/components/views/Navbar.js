import mainLogo from '../../resources/gardenblack.png'

const cl = (text) => {
  //console.log(text || 'something')
}

function Navbar(state) {
  const { changePageNameFn } = state
  return (
    <nav className="navbar navbar-expand-lg navbar-light c-bg-white">
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <a className="" href="" onClick={() => changePageNameFn('Home')}>
              <img src={mainLogo} alt="" width="30" height="30" className="d-inline-block align-text-top"/>
          </a>
          <a className="navbar-brand " href="#" onClick={() => changePageNameFn('Home')}>GreenTips</a>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item ">
              <a className="nav-link active" aria-current="page" href="#" onClick={() => changePageNameFn('Home')}>Αρχικη Σελιδα</a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="#" onClick={() => changePageNameFn('Articles')}>Άρθρα</a>
            </li>
            <form className="d-flex">
              <div className="input-group">
                  <input type="text" className="form-control" placeholder="Αναζήτηση" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                  <span className="input-group-text c-bg-green hover-dark hover-cursor" id="basic-addon2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                      </svg>
                  </span>
                </div>
            </form>
            
          </ul>

          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item ">
                  <a className="nav-link" href="#" onClick={() => changePageNameFn('CommunicationPage')}>Επικοινωνία</a>
              </li>
              <li className="nav-item me-2">
                  <a className="nav-link" href="#" onClick={() => changePageNameFn('About')}>About</a>
              </li>
              <li className="nav-item">
                  <button className="btn hover-dark c-bg-green me-2" type="submit" onClick={() => changePageNameFn('Login')}>Συνδεση</button>
              </li>
              <li className="nav-item">
                  <button className="btn me-2 hover-dark c-bg-green" type="submit">Εγγραφή</button>
              </li>     
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;