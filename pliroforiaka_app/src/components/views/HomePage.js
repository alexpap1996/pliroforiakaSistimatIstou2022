import Home from "../Home";

function HomePage(state) {
  const { changePageNameFn, getArticlesFn } = state
  return (
    <div>
      <Home changePageNameFn={changePageNameFn} getArticlesFn={getArticlesFn}/>
    </div>
  );
}

export default HomePage;
