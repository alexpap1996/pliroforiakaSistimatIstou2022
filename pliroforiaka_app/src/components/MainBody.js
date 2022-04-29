import React from "react";
import HomePage from './views/HomePage'
import About from "./views/About"
import ErrorPage from './views/ErrorPage'
import Articles from "./views/Articles";
import CommunicationPage from "./views/CommunicationPage";
import Login from "./views/Login";
import Article from "./views/Article";
import Signup from "./views/Signup";

const pageMap = {
  'Home': HomePage,
  'About': About,
  'ErrorPage': ErrorPage,
  'Articles': Articles,
  'CommunicationPage': CommunicationPage,
  'Login': Login,
  'Article': Article,
  'Signup': Signup,
} 

function MainBody(state) {
  const { 
    pageName, 
    changePageNameFn, 
    validateUserFn,
    searchTerm,
    pageData,
    setLoginErrorFn,
    loginError,
    setCurrentUserFn,
    isUserLoggedIn,
  } = state
  const PageToReturn = pageMap[pageName]

  return (
    <>
      <PageToReturn 
        changePageNameFn={changePageNameFn}
        validateUserFn={validateUserFn}
        setLoginError={setLoginErrorFn}
        setCurrentUser={setCurrentUserFn}
        loginError={loginError}
        searchTerm={searchTerm}
        pageData={pageData}
        isUserLoggedIn={isUserLoggedIn}
      />
    </>
  );
}

export default MainBody;
