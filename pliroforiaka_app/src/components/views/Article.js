const Article = (state) => {
  const { title, body, imgUrl, authorId, dateCreated, articleId, articleDescription } = state.pageData

  return (<>
    <div className="container">
      <div className="d-flex flex-column justify-content-center">
        <h1>{title}</h1>
        <p>{body}</p>
      </div>
    </div>
  </>)
};

export default Article;
