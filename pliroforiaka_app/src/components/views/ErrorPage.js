import '../styles/ErrorPage.css';

function ErrorPage (state) {
    const { errorCode = 404, errorMessage = "Error Not Found" } = state
    return (<>
        <div className="d-flex flex-column align-items-center justify-content-center body-full">
            <h1 className="flex-column">{errorCode}</h1>
            <h2 className="flex-column">{errorMessage}</h2>
            <button type="button" className="btn btn-dark mt-5">Back To Home Page</button>
        </div>
    </>)
}

export default ErrorPage;