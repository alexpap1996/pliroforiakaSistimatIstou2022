import React from "react";
import HomePage from './views/HomePage'
import About from "./views/About"
import ErrorPage from './views/ErrorPage'
import Articles from "./views/Articles";
import CommunicationPage from "./views/CommunicationPage";
import Login from "./views/Login";
import Article from "./views/Article";

const pageMap = {
  'Home': HomePage,
  'About': About,
  'ErrorPage': ErrorPage,
  'Articles': Articles,
  'CommunicationPage': CommunicationPage,
  'Login': Login,
  'Article': Article,
} 

function MainBody(state) {
  const { pageName, changePageNameFn, validateUserFn, searchTerm, pageData } = state
  const PageToReturn = pageMap[pageName]

  return (
    <>
      <PageToReturn 
        changePageNameFn={changePageNameFn}
        validateUserFn={validateUserFn}
        searchTerm={searchTerm}
        pageData={pageData}
      />
    </>
  );
}

export default MainBody;
