import '../styles/ErrorPage.css';

function CommunicationPage (state) {
    const { changePageNameFn } = state
    return (<>
        <div className="d-flex flex-column align-items-center justify-content-center body-full">
            <h1 className="flex-column">Communication</h1>
            <h2 className="flex-column">Under Construction</h2>
            <button type="button" className="btn btn-dark mt-5" onClick={() => changePageNameFn('Home')}>Back To Home Page</button>
        </div>
    </>)
}

export default CommunicationPage;