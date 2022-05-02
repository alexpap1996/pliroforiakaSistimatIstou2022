import Home from "../Home";

function HomePage(state) {
  const { changePageNameFn } = state
  return (
    <div>
      <Home changePageNameFn={changePageNameFn}/>
    </div>
  );
}

export default HomePage;
